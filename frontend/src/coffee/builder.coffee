
class BuilderView extends Backbone.View
  events:
    'click .builder-save':   'update'
    'click #builder-delete': 'survey_delete'
    'input #builder-date':   'builder_date'
    # 'change #builder-date': 'builder_date'
    'change #builder-name': 'builder_name'
    'click #builder-pause': 'builder_paused'

  initialize: (options) ->
    @setElement $ '#survey_settings_modal'
    @s_id = UriTemplate.extract('/survey/s:{s_id}/edit', window.location.pathname).s_id
    @el_date  = $('#builder-date')
    ol_date = moment(@el_date.val()).format('DD/MM/YYYY')
    @el_date.val(ol_date)
    @save_btn = Ladda.create document.querySelector '#builder-save'
    @builder_paused_init()
    $("#builder-project-title").html($('#builder-name').val())

  builder_date: _.debounce ->
      date = moment(@el_date.val()).toISOString()
      if date
        @update('expires', date)
    ,500

  builder_name: _.debounce ->
      date = $('#builder-name').val()
      $("#builder-project-title").html($('#builder-name').val())
      if date
        @update('survey_name', date)
    ,500

  builder_paused_init: ->
      d = $('#builder-pause').attr('data-paused')
      if d == 'True'
        $('#builder-pause .target').html('Resume')
      else
        $('#builder-pause .target').html('Pause')

  builder_paused: ->
      d = $('#builder-pause').attr('data-paused')
      if d is 'True'
        $('#builder-pause .target').html('Pause')
        $('#builder-pause').attr('data-paused', 'False')
        @update('paused', 'false')
      else
        $('#builder-pause .target').html('Resume')
        $('#builder-pause').attr('data-paused', 'True')
        @update('paused', 'true')

  survey_delete: ->
    swal
        title: "Are you sure you want to delete this Survey?"
        text: "It's not possible to recover a deleted survey."
        type: "warning"
        showCancelButton: true
        confirmButtonColor: "#DD6B55"
        confirmButtonText: "Yes, delete it!"
        closeOnConfirm: false
        showLoaderOnConfirm: true
      , =>
        $.ajax
          url: "/api/survey/#{@s_id}"
          method: 'DELETE'
        .done =>
          swal
              title: "Succesfully Deleted"
              type:  "success"
              confirmButtonText: 'Proceed'
              closeOnConfirm: false
              showCancelButton: false
            , ->
              window.location = '/'
        .fail =>
          swal
            title: "Sorry, something went wrong. Please try again, or contact Support."
            type:  "error"

  update: (field, value) ->
    @save_btn.start()
    $.ajax
      url: "/api/survey/#{@s_id}/#{field}"
      method: 'POST'
      data:
        swag: value
    .done =>
      @save_btn.stop()
      $('#builder-updated').attr('data-livestamp', moment().toISOString())
    .fail =>
      @save_btn.stop()
      swal
        title: "Invalid Value"
        type:  "error"

class Builder
  constructor: (opts={}) ->
    _.extend @, Backbone.Events
    args = _.extend opts, {builder: @}
    @builderView = new BuilderView args

window.Builder = Builder

$(document).ready ->
  s_id = UriTemplate.extract('/survey/s:{s_id}/edit', window.location.pathname).s_id
  json_uri = UriTemplate.expand('/api/survey/{s_id}/json?editing=true', s_id: s_id)
  payload_update_uri = UriTemplate.expand('/api/survey/{s_id}/struct', s_id: s_id)
  im_upload_uri = UriTemplate.expand('/api/survey/{s_id}/img_upload', s_id: s_id)
  im_list_uri   = UriTemplate.expand('/api/survey/{s_id}/repr', s_id: s_id)

  $.getJSON json_uri, (data) ->
    fb = new Formbuilder
      selector: '.sb-main'
      bootstrapData: data.fields
      screens: data.screens
      endpoints:
        img_upload: im_upload_uri
        img_list:   im_list_uri

    fb.on 'save', (payload) ->
      $.post payload_update_uri, { swag: payload }, (data) ->

    builder = new Builder()

    if window.location.hash is '#share'
      $('#survey_export_modal').modal 'show'
    else if window.location.hash is '#settings'
      $('#survey_settings_modal').modal 'show'