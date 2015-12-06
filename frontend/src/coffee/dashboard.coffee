DashboardHelper =
  create_survey: ->
    'use strict'
    #: Get the form data.
    dat = $('#survaider_form').serialize()
    #: Disable the submit button.
    $('#exec_create_survaider').attr('disabled', true).text 'Processing'
    $.ajax
      type: 'POST'
      url: '/api/survey'
      data: dat
    .done (data) ->
      #: Render the New URI and Redirect.
      swal
        title: 'Built!'
        text: 'Proceed to adding the stuff.'
        type: 'success'
        confirmButtonText: 'Edit Structure'
        closeOnConfirm: true
      , ->
        window.location = data.uri_edit
    .fail (data) ->
      swal
        title: 'Error'
        type: 'error'

  survey_tiles:
    init: ->
      @container = $('#card_dock')
      @container.masonry
        columnWidth: 1
        itemSelector: "div[data-card=parent]"
        isFitWidth: true

    append: (dat) ->
      units = dat.units.length > 0
      template = Survaider.Templates['dashboard.tiles']
      attrs =
        # narrow: if dat.has_response_cap is 2 ** 32 then 'narrow' else ''
        expand: if units then 'expanded' else ''
        narrow: if units then '' else 'narrow'

      el = $ template dat: dat, attrs: attrs
      @container.append(el).masonry('appended', el, true)

      if units
        subunit = @units
        cnt = @container.find(el).find('.subunit-container')
        subunit.init cnt, dat

      Waves.attach el.find '.parent-unit'

      el.on 'click', ->
        if el.hasClass('narrow')
          el.find('a.more').click()

      el.find("a.more").on 'click', =>
        el.removeClass('narrow')
        if units
          el.addClass('expanded')
          subunit.reload()
        @reload()

      el.find("a.less").on 'click', (e) =>
        el.addClass('narrow')
        el.removeClass('expanded') if units
        e.stopPropagation()
        @reload()

    reload: (now) ->
      reset = _.bind () =>
        @container.masonry()
      , @

      _.delay reset, 700

      if now
        _.delay reset, 50

    units:
      init: (parent_container, data) ->
        template = Survaider.Templates['dashboard.unit']
        el = $ template dat: data

        parent_container.append(el)

        @parent_container = parent_container
        @container = parent_container.find('.subunitdock')

        @container.masonry
          columnWidth: 1
          itemSelector: "div[data-card=unit]"
          isFitWidth: true

        @append(dat) for dat in data.units.reverse()

        parent_container.find('.btn-subunit').on 'click', =>
          swal {
            title: 'An input!'
            text: 'Write something interesting:'
            type: 'input'
            showCancelButton: true
            closeOnConfirm: false
            animation: 'slide-from-top'
            inputPlaceholder: 'Write something'
          }, (inputValue) ->
            if inputValue == false
              return false
            if inputValue == ''
              swal.showInputError 'You need to write something!'
              return false
            swal 'Nice!', 'You wrote: ' + inputValue, 'success'

      append: (dat) ->
        template = Survaider.Templates['dashboard.unit.tiles']
        el = $ template dat: dat

        @container.append(el).masonry('appended', el, true)

        el.find(".sparkline").sparkline _.shuffle([15,16,17,19,19,15,13,12,12,14,16,17,19,30,13,35,40,30,35,35,35,22]),
          type: 'line'
          lineColor: '#333333'
          fillColor: '#00bfbf'
          spotColor: '#7f007f'
          width: '200px'
          height: '50px'
          chartRangeMin: 0
          drawNormalOnTop: false
          disableInteraction: yes

      reload: (now) ->
        reset = _.bind () =>
          @container.masonry()
        , @

        _.delay reset, 100

  nav_menu: ->
    if $('.cd-stretchy-nav').length > 0
      stretchyNavs = $('.cd-stretchy-nav')
      stretchyNavs.each ->
        stretchyNav = $(this)
        stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger')
        stretchyNavTrigger.on 'click', (event) ->
          event.preventDefault()
          stretchyNav.toggleClass 'nav-is-visible'

      $(document).on 'click', (event) ->
        !$(event.target).is('.cd-nav-trigger') and !$(event.target).is('.cd-nav-trigger span') and stretchyNavs.removeClass('nav-is-visible')


$(document).ready ->
  DashboardHelper.survey_tiles.init()
  Waves.init()

  $.getJSON '/api/survey', (data) ->
    $('.spinner').hide()

    if data.data.length is 0
      $('.alt-text').fadeIn()

    DashboardHelper.survey_tiles.append(dat) for dat in data.data.reverse()

  $('#survaider_form').submit (e) ->
    e.preventDefault()
    DashboardHelper.create_survey()

  DashboardHelper.nav_menu()

window.DashboardHelper = DashboardHelper
