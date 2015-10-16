var colors = {
    animal: {
        primary: '#E14A33',
        highlight: '#F68E63'
    },
    womenazi: {
        primary: '#EC297B',
        highlight: '#FF6699'
    },
    education: {
        primary: '#3B1A50',
        highlight: '#81509F'
    },
    environment: {
        primary: '#009E47',
        highlight: '#45D145'
    },
    healthcare: {
        primary: '#398EDF',
        highlight: '#1D5FA9'
    },
    childrenright: {
        primary: '#FC8713',
        highlight: '#FCC013'
    },
    brand: {
        primary: '#ED2355',
        highlight: '#FFC718'
    }
};
var paths = {
    s_highlight_layer: 'M96.6605872,162.34813 L126.036003,146.768865 C127.250003,146.069865 125.769003,145.947865 125.769003,147.351865 L127.769003,186.087865 L151.800003,172.168865 L151.800003,109.295865 C151.800003,106.334865 148.599003,104.480865 146.030003,105.953865 L114.723003,122.910865 C112.063003,124.435865 109.748003,123.515865 109.748003,120.450865 L109.748003,116.663865 C109.748003,114.625865 109.833003,112.742865 111.595003,111.717865 L139.569003,94.5458646 C141.459003,93.5228646 141.650003,91.1908646 141.655003,90.1858646 L141.577003,68.0878646 C141.574746,67.4016559 141.7027,66.3406634 141.374725,65.02629 C141.35635,66.1403696 140.567594,66.2464792 139.148005,67.0724991 L90.0710046,95.6154991 C87.0090046,97.3984991 84.1230046,101.674499 84.1230046,105.218499 L84.1230046,160.954499 C84.1230046,160.954499 84.0912715,164.020195 84.4707116,165.502501 C83.9604247,165.360897 83.442307,165.147153 82.9390046,164.835499 C78.7908342,162.26632 69.7002637,156.418292 61.5059651,151.70226 L46.2010076,160.699501 C46.2010076,160.699501 45.0770076,161.175501 44.1130076,162.598501 C44.9443349,161.57379 46.1406663,160.979499 47.3990046,160.979499 C48.0740046,160.979499 48.7660046,161.149499 49.4190046,161.523499 L81.5310046,183.444499 C82.9320046,184.245499 82.7950046,183.734499 82.7950046,185.346499 L84.7950046,210.531289 L108.710008,196.711501 L108.710008,171.652501 C108.710008,169.912501 107.719008,168.321501 106.154008,167.556501 L96.6605872,162.34813 Z',
    s_primary_layer: 'M108.710008,174.97975 L127.769003,186.070748 L127.769003,186.070748 L127.769003,147.351865 C127.769003,145.947865 126.250003,145.069865 125.036003,145.768865 L96.419758,162.216004 L106.154008,167.556501 C107.719008,168.321501 108.710008,169.912501 108.710008,171.652501 L108.710008,174.97975 Z M43.3130046,165.067499 L43.3130046,185.923499 L84.7950046,210.595499 L84.7950046,185.346499 C84.7950046,183.734499 83.9320046,182.245499 82.5310046,181.444499 L49.4190046,161.523499 C48.7660046,161.149499 48.0740046,160.979499 47.3990046,160.979499 C45.2670046,160.979499 43.3130046,162.685499 43.3130046,165.067499 Z M97.7200046,43.7364991 L48.5000046,72.2124991 C45.4530046,73.9764991 43.3270046,77.4934991 43.3130046,81.0134991 L43.3270046,136.830499 C43.3120046,140.534499 45.2830046,143.962499 48.4920046,145.814499 C48.4920046,145.814499 75.4360046,161.188499 82.9390046,165.835499 C85.4680046,167.401499 88.8970046,166.542499 89.3010046,166.433499 C89.0170046,166.507499 87.2520046,166.878499 85.7580046,165.172499 C85.0770046,164.398499 85.1230046,160.954499 85.1230046,160.954499 L85.1230046,105.218499 C85.1230046,101.674499 87.0090046,98.3984991 90.0710046,96.6154991 L139.148005,68.0724991 C141.829005,66.5124991 142.260005,63.9534991 139.501005,62.2284991 C133.332005,58.3664991 107.031005,43.7144991 107.031005,43.7144991 C105.595005,42.8904991 103.994005,42.4794991 102.393005,42.4794991 C100.780005,42.4794991 99.1650046,42.8994991 97.7200046,43.7364991 Z M149.097822,105.617218 L149.122005,105.603499 L134.890975,97.4174986 L111.595003,111.717865 C109.833003,112.742865 108.748003,114.625865 108.748003,116.663865 L108.748003,120.450865 C108.748003,123.515865 112.063003,125.435865 114.723003,123.910865 L146.030003,105.953865 C147.032285,105.379181 148.130766,105.310911 149.097822,105.617218 L149.097822,105.617218 Z'
};

var routine = {
    draw: null,
    base: {
        primary: null,
        highlight: null
    },
    init: function () {
        "use strict";
        // Setting up the canvas
        this.draw = SVG('drawing').size(200, 300);
        // Drawing the bases
        this.base.highlight = this.draw.path(paths.s_highlight_layer).opacity(1);
        this.base.primary = this.draw.path(paths.s_primary_layer).opacity(1);
        this.base.primary.animate(1000, '>', 0).attr({fill: colors.womenazi.primary});
        this.base.highlight.animate(1000, '>', 0).attr({fill: colors.womenazi.highlight});


        var rawSvg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="194px" height="252px" viewBox="0 0 194 252" version="1.1"><!-- Generator: Sketch 3.3.2 (12043) - http://www.bohemiancoding.com/sketch --><title>women</title><desc>Created with Sketch.</desc><defs><path id="path-1" d="M14.465 18.791 L14.465 13.691 L21.031 15.864 L21.031 10.864 L14.465 8.691 L14.465 2.297 L9.465 0.297 L9.465 7.036 L2.899 4.863 L2.899 9.863 L9.465 12.036 L9.465 17.671 C4.272 17.873 0.395 22.852 0.395 28.622 C0.395 35.771 6.206 42.082 11.965 43.043 C19.062 43.774 23.536 39.016 23.536 32.349 C23.536 26.158 19.67 21.08 14.465 18.791 L14.465 18.791 Z"/></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="women" sketch:type="MSArtboardGroup"><path d="M65.0635469 64.686 C63.2805469 66.748 57.547 67.199 58.065 70.832 C58.3605469 72.909 58.132 72.07 59.813 72.331 C62.2975469 72.717 60.746 74.017 62.383 74.905 C63.9985469 75.781 67.739 73.096 69.552 72.843 C71.7495469 72.536 73.159 72.539 74.199 74.375 C75.2545469 76.238 75.899 76.789 78.152 76.483 C79.8025469 76.259 84.648 74.712 86.288 75.732 C88.9685469 77.399 83.745 83.69 88.577 83.087 C90.5975469 82.835 92.327 81.367 94.417 81.031 C95.6135469 80.839 97.536 80.537 98.743 80.866 C99.7115469 81.13 100.306 82.06 101.307 82.366 C103.660547 83.084 105.35 80.932 106.928 79.637 C109.772547 77.298 113.723 76.294 117.224 75.236 C121.376547 73.981 125.217 72.139 129.166 70.405 C131.949547 69.183 133.624 67.689 134.891 64.82 C135.386547 63.696 135.942 62.081 135.967 60.892 C136.000547 59.321 135.576 59.305 134.098 59.185 C126.826547 58.597 120.051 61.439 113.018 62.642 C100.704547 64.748 87.705 62.001 75.36 63.291 C71.2205469 63.724 68.927 65.336 64.722 65.367" id="Shadow" fill="#FF6699" sketch:type="MSShapeGroup"/><g id="Females" sketch:type="MSLayerGroup"><path d="M129.141 43.476 C129.057 42.564 128.398 42.447 127.849 42.899 C127.825 42.878 127.797 42.855 127.776 42.838 C127.323 42.504 126.889 43.118 127.121 43.532 C127.124 43.545 127.12 43.555 127.124 43.568 C127.489 44.824 128.219 45.887 128.842 47.022 C129.074 47.444 129.809 47.271 129.774 46.769 C129.722 46.039 129.384 45.398 129.208 44.695 C129.111 44.306 129.178 43.874 129.141 43.476 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M124.689 44.04 C124.748 44.95 124.845 45.961 126.06 45.996 C127.994 46.054 127.065 44.459 127.187 42.935 C129.062 43.435 130.118 42.75 130.687 41.685 C131.696 39.797 131.164 35.403 129.119 34.71 C127.967 34.32 126.599 34.508 125.707 35.385 C124.564 36.506 124.67 38.102 124.709 39.592 C124.731 40.506 124.801 41.428 124.746 42.339 C124.711 42.904 124.654 43.475 124.689 44.04 L124.689 44.04 Z" id="Shape" fill="#D0D2D3" sketch:type="MSShapeGroup"/><path d="M135.54 56.626 C135.311 52.778 134.98 47.629 131.75 44.992 C129.254 42.955 124.786 43.584 121.889 44.135 C118.66 44.748 119.179 47.522 120.093 49.913 C118.465 50.257 116.858 50.42 115.184 50.328 C114.12 50.27 113.203 50.084 112.409 49.371 C112.163 49.149 111.78 48.849 111.44 48.799 C110.122 48.61 106.641 50.811 106.002 49.019 C104.679 45.316 108.272 40.353 99.772 43.436 C98.947 43.735 96.868 42.26 96.011 42.43 C94.573 42.715 93.63 42.397 92.376 41.641 C90.641 40.592 90.187 37.987 88.113 37.362 C83.708 36.034 80.16 40.153 79.682 44.198 C79.643 44.524 79.934 44.646 80.186 44.58 C77.539 48.889 76.77 54.354 72.761 57.746 C70.223 59.892 67.408 61.636 65.08 64.037 C63.627 65.538 61.952 67.872 63.67 69.776 C64.403 70.589 65.623 70.481 66.606 70.383 C68.583 70.189 70.526 69.643 72.481 69.303 C75.108 68.846 76.807 69.36 79.243 70.418 C81.646 71.462 83.982 71.559 86.568 71.576 C89.422 71.596 91.667 73.039 94.053 74.407 C96.022 75.537 98.067 75.898 100.32 75.849 C103.038 75.79 105.71 74.969 108.321 74.296 C111.516 73.474 114.595 72.491 117.643 71.217 C120.182 70.155 122.657 68.944 125.135 67.747 C127.288 66.708 129.531 65.98 131.715 65.03 C135.248 63.494 135.748 60.131 135.54 56.626 L135.54 56.626 Z" id="Shape" fill="#D0D2D3" sketch:type="MSShapeGroup"/><path d="M83.534 40.637 L83.356 43.538 L84.6 44.131 L83.534 40.637 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M84.6 44.131 C84.6 44.131 83 42.77 82.942 44.131 L84.6 44.131 L84.6 44.131 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup" d="M84.473 45.496 C84.473 45.496 83.827 44.9 83.594 45.263 C83.594 45.263 83.49 44.902 83.076 45.445 L84.473 45.496 L84.473 45.496 Z"/><path d="M125.541 42.822 C125.836 42.455 125.997 42.003 126.027 41.528 C126.058 41.04 125.926 40.389 126.103 39.932 C126.291 39.44 126.663 39.329 127.031 39.042 C127.449 38.719 127.63 38.229 127.427 37.718 C127.259 37.296 126.875 36.78 127.003 36.311 C127.164 35.711 127.539 35.315 128.042 34.987 C128.952 35.163 129.525 36.053 130.438 36.263 C130.516 36.282 130.597 36.24 130.62 36.159 C131.206 34.018 127.99 33.934 126.646 34.021 C125.578 34.091 124.543 34.299 123.718 35.048 C123.195 35.525 122.64 36.189 122.522 36.913 C122.355 37.933 122.797 38.866 122.725 39.871 C122.672 40.595 121.935 40.854 121.8 41.507 C121.757 41.72 121.767 41.906 121.82 42.074 C121.61 43.093 121.923 43.898 122.601 44.752 C122.955 45.197 123.208 45.472 123.28 46.063 C123.345 46.604 123.323 47.145 123.468 47.675 C123.663 48.382 124.556 48.753 125.115 49.097 C125.723 49.472 126.375 50.104 127.027 49.463 C127.598 48.904 127.252 47.805 126.788 47.317 C125.895 46.38 126.306 44.976 125.933 43.762 C125.837 43.45 125.705 43.125 125.541 42.822 L125.541 42.822 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup" d="M83.205 45.366 L84.395 45.418 C84.396 45.418 83.386 46.323 83.205 45.366 L83.205 45.366 Z"/><path d="M103.518 44.66 L103.838 47.55 L102.626 48.203 L103.518 44.66 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M102.626 48.203 C102.626 48.203 104.156 46.765 104.282 48.121 L102.626 48.203 L102.626 48.203 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M94.044 44.936 L93.695 46.553 L94.917 47.403 L94.044 44.936 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M94.917 47.403 C94.917 47.403 93.366 45.546 93.259 47.274 L94.917 47.403 L94.917 47.403 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M130.575 38.4 L131.506 40.403 L130.443 40.688 L130.575 38.4 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup" d="M130.443 40.688 C130.443 40.688 131.958 40.166 131.385 40.547 L130.443 40.688 L130.443 40.688 Z"/><path id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup" d="M129.432 41.811 C129.432 41.811 130.047 41.184 130.298 41.535 C130.298 41.535 130.383 41.169 130.823 41.69 L129.432 41.811 L129.432 41.811 Z"/><path id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup" d="M130.691 41.618 L129.503 41.728 C129.504 41.729 130.558 42.583 130.691 41.618 L130.691 41.618 Z"/><path d="M94.791 48.569 C94.791 48.569 94.19 47.639 93.931 48.173 C93.931 48.173 93.855 47.624 93.401 48.421 L94.791 48.569 L94.791 48.569 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M93.534 48.311 L94.721 48.448 C94.721 48.447 93.645 49.762 93.534 48.311 L93.534 48.311 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M85.787 37.011 C84.827 37.014 81.069 37.426 81.439 39.009 C81.677 40.029 84.094 39.752 84.909 39.714 C85.391 39.692 85.92 39.582 86.378 39.437 C86.957 39.251 87.088 39.038 87.185 39.783 C87.268 40.429 87.139 41.202 87.315 41.828 C87.469 42.38 87.738 42.371 88.305 42.426 C88.319 43.188 87.914 43.981 88.722 44.521 C89.604 45.11 90.774 44.474 91.533 44.002 C92.477 43.414 92.947 43.045 92.897 41.889 C92.85 40.795 92.348 40.818 91.379 40.762 C90.981 39.474 89.93 38.113 88.77 37.365 C88.109 36.938 87.604 36.668 86.799 36.66 C86.406 36.656 85.88 36.574 85.494 36.655 C84.938 36.773 84.563 37.176 84.083 37.424 " id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M80.383 50.764 C79.781 51.809 78.819 52.726 78.046 53.639 C76.594 55.358 74.979 57.003 73.658 58.823 C72.791 60.018 71.627 60.972 70.804 62.187 C70.567 62.538 70.157 63.03 70.107 63.463 C70.688 63.72 71.882 62.623 72.393 62.351 C73.442 61.793 74.518 61.147 75.687 60.926 C75.986 61.864 75.995 62.927 76.151 63.902 C76.208 64.249 76.282 65.403 76.684 65.579 C77.11 65.765 78.913 64.896 79.36 64.743 C79.968 64.535 80.372 64.489 80.503 63.919 C80.752 62.831 79.628 61.509 79.456 60.444 C79.317 59.58 79.385 58.674 79.385 57.798 C79.385 57.06 79.289 56.252 79.385 55.52 C79.484 54.762 79.991 54.367 80.318 53.694 C80.742 52.823 80.154 51.977 80.149 51.057 " id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M122.434 50.764 C123.036 51.809 123.998 52.726 124.771 53.639 C126.223 55.358 127.838 57.003 129.159 58.823 C130.026 60.018 131.19 60.972 132.013 62.187 C132.25 62.538 132.66 63.03 132.71 63.463 C132.129 63.72 130.935 62.623 130.424 62.351 C129.375 61.793 128.299 61.147 127.13 60.926 C126.831 61.864 126.822 62.927 126.666 63.902 C126.609 64.249 126.535 65.403 126.133 65.579 C125.707 65.765 123.904 64.896 123.457 64.743 C122.849 64.535 122.445 64.489 122.314 63.919 C122.065 62.831 123.189 61.509 123.361 60.444 C123.5 59.58 123.432 58.674 123.432 57.798 C123.432 57.06 123.528 56.252 123.432 55.52 C123.333 54.762 122.826 54.367 122.499 53.694 C122.075 52.823 122.663 51.977 122.668 51.057 " id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M128.868 39.669 C128.585 39.523 128.662 39.185 128.724 38.913 C128.75 38.796 128.778 38.676 128.775 38.588 L128.84 38.459 L128.855 38.459 C128.964 38.459 129.13 38.428 129.305 38.395 C129.717 38.317 130.108 38.243 130.282 38.437 C130.446 38.62 130.452 38.913 130.407 39.109 C130.359 39.319 130.251 39.473 130.109 39.532 C129.981 39.587 129.841 39.583 129.724 39.579 C129.658 39.576 129.591 39.574 129.526 39.585 C129.475 39.592 129.419 39.614 129.36 39.635 C129.264 39.669 129.153 39.709 129.042 39.709 C128.983 39.709 128.925 39.698 128.868 39.669 ZM129.02 38.697 C129.01 38.785 128.989 38.878 128.968 38.968 C128.91 39.222 128.88 39.393 128.984 39.446 C129.046 39.478 129.163 39.438 129.275 39.399 C129.345 39.373 129.419 39.346 129.489 39.336 C129.571 39.325 129.651 39.326 129.731 39.328 C129.837 39.331 129.934 39.334 130.012 39.301 C130.075 39.275 130.135 39.178 130.163 39.053 C130.202 38.877 130.175 38.693 130.096 38.605 C130.013 38.513 129.601 38.593 129.352 38.64 C129.234 38.662 129.121 38.684 129.02 38.697 L129.02 38.697 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M130.786 39.154 C130.612 39.024 130.653 38.766 130.692 38.517 C130.708 38.419 130.723 38.318 130.722 38.243 L130.814 38.116 L130.819 38.116 C130.872 38.116 130.97 38.089 131.058 38.065 C131.287 38.002 131.572 37.924 131.693 38.123 C131.797 38.289 131.795 38.567 131.75 38.755 C131.716 38.898 131.658 38.995 131.579 39.043 C131.486 39.1 131.391 39.097 131.317 39.093 C131.28 39.091 131.247 39.09 131.222 39.096 C131.203 39.1 131.171 39.117 131.143 39.132 C131.088 39.16 131.01 39.202 130.926 39.202 C130.88 39.202 130.832 39.189 130.786 39.154 ZM130.968 38.347 C130.962 38.415 130.95 38.487 130.94 38.557 C130.919 38.691 130.883 38.915 130.937 38.954 C130.947 38.952 130.998 38.926 131.027 38.91 C131.073 38.887 131.119 38.862 131.171 38.851 C131.226 38.838 131.281 38.839 131.328 38.842 C131.389 38.846 131.424 38.845 131.449 38.829 C131.522 38.777 131.572 38.399 131.481 38.253 C131.443 38.222 131.22 38.278 131.126 38.305 C131.07 38.321 131.018 38.336 130.968 38.347 L130.968 38.347 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M81.889 39.991 C81.889 39.991 79.599 43.822 81.753 48.21 L81.992 52.198 L83.268 52.517 L84.704 54.113 C84.704 54.113 87.099 49.725 86.938 47.89 L83.986 47.012 L82.854 46.737 L81.912 43.742 L81.889 39.991 L81.889 39.991 Z" id="Shape" fill="#BBBDBF" sketch:type="MSShapeGroup"/><path d="M129.349 44.93 C129.252 44.541 129.319 44.109 129.282 43.711 C129.27 43.589 129.131 43.389 129.094 43.404 C128.701 43.58 128.424 43.591 128 43.545 C127.709 43.514 127.427 43.509 127.233 43.326 C127.184 43.467 127.182 43.628 127.26 43.767 C127.263 43.78 127.259 43.79 127.263 43.803 C127.628 45.059 128.358 46.122 128.981 47.257 C129.213 47.679 129.948 47.506 129.913 47.004 C129.862 46.273 129.524 45.633 129.349 44.93 L129.349 44.93 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M82.854 46.737 C82.854 46.737 85.022 47.653 86.938 45.32 L86.938 48.57 C86.938 48.57 85.27 46.904 84.854 47.654 L82.854 46.737 L82.854 46.737 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M103.304 51.407 L100.32 50.352 L103.403 52.519 L103.32 55.102 C103.32 55.102 104.211 52.239 104.711 52.989 L105.852 47.624 L104.654 50.103 L103.304 51.407 L103.304 51.407 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M92.422 50.157 L93.232 50.697 C93.232 50.697 95.392 51.418 97.287 48.986 L97.287 54.659 C97.287 54.659 95.643 55.175 95.013 55.805 L95.612 51.416 C93.682 51.151 92.422 50.157 92.422 50.157 L92.422 50.157 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M81.889 39.991 C81.889 39.991 81.619 42.872 82.52 46.023 L81.259 45.212 C81.259 45.213 80.988 41.792 81.889 39.991 L81.889 39.991 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M121.212 46.762 L121.812 46.494 L122.608 47.492 L121.744 51.018 L120.414 53.61 L121.943 55.34 L114.695 54.275 L111.569 55.473 L110.239 54.675 L111.903 48.956 L113.765 51.084 L118.087 51.482 L120.215 49.753 L121.08 49.154 " id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M99.199 43.108 L101.611 41.903 L100.835 51.977 L100.061 54.042 L101.523 56.884 L101.696 58.777 L106.259 61.274 L107.206 64.89 L104.192 61.188 L99.716 60.155 L99.63 56.453 L98.855 53.87 L97.306 52.492 L98.166 47.758 L97.392 43.797 L97.736 42.162 L99.199 43.108 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M92.553 54.144 C92.072 54.397 91.459 53.82 91.488 53.346 C91.528 52.658 92.628 52.728 92.411 51.959 C91.876 51.846 90.987 52.086 90.591 51.618 C89.838 50.73 91.042 50.757 91.357 50.372 C91.899 49.709 90.259 49.687 90.226 49.022 C90.205 48.576 90.694 48.677 90.908 48.374 C91.082 48.125 91.031 47.809 91.014 47.503 C90.608 47.526 90.016 47.492 89.959 47.013 C89.857 46.161 90.81 46.449 91.147 46.151 C91.719 45.646 90.958 45.588 90.889 45.131 C90.815 44.65 91.456 44.651 91.876 44.646 C91.944 44.762 92.056 44.851 92.125 44.959 C92.056 44.797 91.93 44.409 92.02 44.234 C92.216 43.852 92.403 44.236 92.689 44.038 C93.125 43.737 92.768 42.969 93.275 42.711 C93.346 43.962 92.428 44.666 92.153 45.831 C91.935 46.748 91.942 48.331 92.22 49.219 C92.381 49.734 92.588 50.258 92.835 50.738 C93.041 51.137 93.542 51.551 93.671 51.966 C93.803 52.388 93.727 53.161 93.531 53.531 C93.437 53.709 93.105 53.943 93.08 54.077 C92.985 54.572 93.335 54.511 93.473 54.824 C93.575 55.058 93.663 55.275 93.591 55.531 C92.301 55.737 93.049 55.698 92.862 56.594 C92.255 56.676 91.418 56.557 91.351 55.937 C91.331 55.752 91.599 55.568 91.545 55.288 C91.498 55.045 91.076 55.123 91.166 54.686 C91.624 54.727 92.121 54.541 91.821 54.011 " id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M95.346 42.639 C96.442 42.701 96.857 44.453 96.942 45.299 C97.05 46.373 97.22 47.336 97.209 48.424 C97.194 49.721 96.987 50.987 96.942 52.283 C96.922 52.847 96.827 53.596 96.94 54.144 C97.097 54.9 97.75 54.529 97.945 55.069 C98.106 55.515 97.574 55.867 97.217 55.948 C97.172 56.547 98.268 57.106 98.794 56.994 C98.951 56.408 98.447 56.184 98.41 55.685 C98.733 55.622 99.57 55.365 99.389 54.888 C99.274 54.585 98.444 54.687 98.22 54.456 C97.725 53.947 98.492 53.985 98.61 53.477 C98.721 52.988 97.938 52.789 98.168 52.295 C98.343 51.918 99.149 52.046 99.206 51.415 C99.275 50.644 98.499 50.9 98.286 50.541 C97.979 50.024 98.548 49.964 98.727 49.605 C98.936 49.188 98.862 48.355 98.69 47.956 C99.176 47.754 99.671 47.794 99.406 47.24 C99.228 46.87 98.418 46.776 98.22 46.482 C97.949 46.077 98.29 45.669 98.343 45.299 C98.414 44.797 98.318 44.382 98.142 43.952 C98.072 43.779 97.851 43.749 97.803 43.57 C97.731 43.303 97.948 42.937 97.942 42.653 C97.928 42.037 97.689 41.883 97.072 41.771 C96.427 41.653 95.766 42.005 95.292 41.326 C95.237 41.775 95.71 42.02 95.603 42.558 C95.514 42.582 95.434 42.621 95.346 42.639 " id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M95.545 42.705 C95.124 42.705 94.096 42.496 93.748 42.7 C93.415 42.895 93.55 43.35 93.161 43.428 C92.555 41.907 94.539 41.008 95.744 41.907 " id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M104.625 43.314 C104.625 43.314 106.861 44.604 103.763 57.346 C103.763 57.346 107.035 50.459 107.035 46.241 C107.035 46.241 106.432 40.644 102.73 41.506 C102.73 41.506 103.765 42.368 104.625 43.314 L104.625 43.314 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M104.107 42.711 C104.107 42.711 100.75 42.97 102.041 54.937 C102.041 54.937 99.026 52.44 99.63 47.619 C99.63 47.619 99.221 44.17 100.711 42.412 C101.274 41.749 102.106 41.326 103.332 41.421 L104.107 42.711 L104.107 42.711 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M77.248 56.797 C76.989 56.797 76.473 59.294 76.473 59.294 L75.01 59.294 L75.956 58.003 L76.645 57.056 L77.248 56.797 L77.248 56.797 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M89.129 61.36 C88.87 61.36 88.354 63.857 88.354 63.857 L86.891 63.857 L87.837 62.566 L88.526 61.619 L89.129 61.36 L89.129 61.36 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M84.661 48.437 C84.402 48.437 83.886 50.934 83.886 50.934 L82.423 50.934 L83.369 49.643 L84.058 48.696 L84.661 48.437 L84.661 48.437 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M112.202 49.823 L114.871 54.559 L113.408 56.108 L112.633 59.208 L112.978 53.095 L112.202 49.823 Z" id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup"/><path d="M94.983 60.241 L97.652 64.977 L96.189 66.526 L95.414 69.626 L95.759 63.513 L94.983 60.241 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M97.312 49.314 L97.947 50.443 L97.598 50.813 L97.413 51.551 L97.496 50.095 L97.312 49.314 Z" id="Shape" fill="#BBBDBF" sketch:type="MSShapeGroup"/><path d="M97.231 51.788 L97.867 52.917 L97.518 53.286 L97.333 54.024 L97.416 52.568 L97.231 51.788 Z" id="Shape" fill="#BBBDBF" sketch:type="MSShapeGroup"/><path d="M97.675 46.822 L98.311 47.951 L97.961 48.32 L97.776 49.059 L97.859 47.603 L97.675 46.822 Z" id="Shape" fill="#BBBDBF" sketch:type="MSShapeGroup"/><path d="M97.196 44.109 L97.832 45.238 L97.482 45.607 L97.298 46.346 L97.381 44.89 L97.196 44.109 Z" id="Shape" fill="#BBBDBF" sketch:type="MSShapeGroup"/><path d="M96.274 42.458 L97.303 43.246 L97.127 43.723 L97.247 44.475 L96.751 43.104 L96.274 42.458 Z" id="Shape" fill="#BBBDBF" sketch:type="MSShapeGroup"/><path d="M134.07 50.082 L133.123 53.956 L134.932 60.758 L135.104 54.645 L134.07 50.082 Z" id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup"/><path d="M84.781 36.904 L84.5 37.435 C84.5 37.435 87.547 37.716 88.406 38.794 L88.5 38.278 C88.5 38.279 87.578 37.232 84.781 36.904 L84.781 36.904 Z" id="Shape" fill="#D0D2D3" sketch:type="MSShapeGroup"/><path id="Shape" fill="#6D6E70" sketch:type="MSShapeGroup" d="M102.819 49.561 C102.819 49.561 103.434 48.934 103.685 49.285 C103.685 49.285 103.77 48.919 104.21 49.44 L102.819 49.561 L102.819 49.561 Z"/><path id="Shape" fill="#A6A8AB" sketch:type="MSShapeGroup" d="M104.079 49.368 L102.891 49.478 C102.892 49.479 103.945 50.333 104.079 49.368 L104.079 49.368 Z"/></g><g id="Hat3" sketch:type="MSLayerGroup"><path d="M123.308 34.463 L121.17 34.736 L124.239 30.955 L129.336 31.777 L127.308 33.367 " id="Shape" fill="#EC297B" sketch:type="MSShapeGroup"/><path d="M127.632 34.227 L127.692 32.875 L128.69 31.876 L124.578 31.465 L121.875 34.403 L123.285 34.814 L124.225 35.343 C124.225 35.343 124.635 34.462 127.632 34.227 L127.632 34.227 Z" id="Shape" fill="#FF6699" sketch:type="MSShapeGroup"/><path d="M125.166 33.169 L124.344 31.23 L121.874 34.403 L123.286 34.814 C123.286 34.813 123.521 33.815 125.166 33.169 L125.166 33.169 Z" id="Shape" fill="#EF5691" sketch:type="MSShapeGroup"/><path d="M127.691 32.875 C127.691 32.875 124.226 32.698 123.286 34.813 L121.874 34.402 L124.227 31.406 L128.69 31.876 L127.691 32.875 L127.691 32.875 Z" id="Shape" opacity="0.28" fill="#EF5691" sketch:type="MSShapeGroup"/></g><g id="Hat2" sketch:type="MSLayerGroup"><path d="M101.138 41.06 L99.368 40.69 L102.84 38.534 L106.655 40.585 L104.61 41.289 " id="Shape" fill="#EC297B" sketch:type="MSShapeGroup"/><path d="M104.632 42.06 L105.05 41.004 L106.115 40.486 L102.968 39.031 L100.019 40.618 L101.023 41.332 L101.625 42.01 C101.624 42.01 102.19 41.424 104.632 42.06 L104.632 42.06 Z" id="Shape" fill="#FF6699" sketch:type="MSShapeGroup"/><path d="M102.967 40.544 L102.847 38.781 L100.019 40.618 L101.025 41.332 C101.024 41.332 101.484 40.605 102.967 40.544 L102.967 40.544 Z" id="Shape" fill="#EF5691" sketch:type="MSShapeGroup"/><path d="M105.05 41.004 C105.05 41.004 102.352 39.913 101.025 41.332 L100.019 40.618 L102.707 38.889 L106.116 40.487 L105.05 41.004 L105.05 41.004 Z" id="Shape" opacity="0.28" fill="#EF5691" sketch:type="MSShapeGroup"/></g><g id="Hat1" sketch:type="MSLayerGroup"><path d="M93.255 40.679 L91.44 40.053 L95.384 38.245 L99.13 40.912 L96.882 41.383 " id="Shape" fill="#EC297B" sketch:type="MSShapeGroup"/><path d="M96.802 42.196 L97.383 41.14 L98.574 40.736 L95.451 38.785 L92.135 40.065 L93.098 40.949 L93.641 41.743 C93.641 41.743 94.315 41.202 96.802 42.196 L96.802 42.196 Z" id="Shape" fill="#FF6699" sketch:type="MSShapeGroup"/><path d="M95.25 40.379 L95.358 38.506 L92.134 40.066 L93.099 40.952 C93.1 40.951 93.682 40.246 95.25 40.379 L95.25 40.379 Z" id="Shape" fill="#EF5691" sketch:type="MSShapeGroup"/><path d="M97.383 41.141 C97.383 41.141 94.686 39.632 93.1 40.952 L92.135 40.066 L95.196 38.601 L98.575 40.737 L97.383 41.141 L97.383 41.141 Z" id="Shape" opacity="0.28" fill="#EF5691" sketch:type="MSShapeGroup"/></g><g id="Hat0" sketch:type="MSLayerGroup"><path d="M88.615 37.599 L90.753 37.872 L87.684 34.091 L82.587 34.913 L84.615 36.503 " id="Shape" fill="#EC297B" sketch:type="MSShapeGroup"/><path d="M84.291 37.362 L84.231 36.01 L83.233 35.011 L87.345 34.6 L90.048 37.538 L88.638 37.949 L87.698 38.478 C87.698 38.479 87.288 37.598 84.291 37.362 L84.291 37.362 Z" id="Shape" fill="#FF6699" sketch:type="MSShapeGroup"/><path d="M86.757 36.305 L87.579 34.366 L90.049 37.539 L88.637 37.95 C88.637 37.949 88.402 36.951 86.757 36.305 L86.757 36.305 Z" id="Shape" fill="#EF5691" sketch:type="MSShapeGroup"/><path d="M84.231 36.011 C84.231 36.011 87.696 35.834 88.636 37.949 L90.048 37.538 L87.695 34.542 L83.232 35.012 L84.231 36.011 L84.231 36.011 Z" id="Shape" opacity="0.28" fill="#EF5691" sketch:type="MSShapeGroup"/></g><g id="Feminazi" sketch:type="MSLayerGroup" transform="translate(53.000000, 97.000000)"><path d="M14.929 19.494 L14.929 14.394 L21.495 16.567 L21.495 11.567 L14.929 9.394 L14.929 3 L9.929 1 L9.929 7.739 L3.363 5.566 L3.363 10.566 L9.929 12.739 L9.929 18.374 C4.736 18.576 0.859 23.555 0.859 29.325 C0.859 36.474 6.67 42.785 12.429 43.746 C19.526 44.477 24 39.719 24 33.052 C24 26.861 20.134 21.783 14.929 19.494 L14.929 19.494 L14.929 19.494 Z M12.429 38.747 C8.135 37.261 5.859 33.733 5.859 29.326 C5.859 25.385 8.474 23.051 12.429 23.633 C15.868 23.633 19 28.647 19 33.053 C19 36.994 16.085 40.013 12.429 38.747 L12.429 38.747 L12.429 38.747 Z" id="Shape-Copy" fill="#FF6699" sketch:type="MSShapeGroup"/><g id="Clipped" transform="translate(0.480003, 0.730003)"><mask id="mask-2" sketch:name="SVGID_198_" fill="white"><use xlink:href="#path-1"/></mask><g id="SVGID_198_"/><path d="M15.818 17.561 L15.818 12.461 L22.384 14.634 L22.384 9.634 L15.818 7.461 L15.818 1.067 L10.818 -0.933 L10.818 5.806 L4.252 3.633 L4.252 8.633 L10.818 10.806 L10.818 16.441 C5.625 16.643 1.748 21.622 1.748 27.392 C1.748 34.541 7.559 40.852 13.318 41.813 C20.415 42.544 24.889 37.786 24.889 31.119 C24.89 24.928 21.023 19.85 15.818 17.561 L15.818 17.561 Z M13.318 36.813 C9.024 35.327 6.748 31.799 6.748 27.392 C6.748 23.451 9.363 21.117 13.318 21.699 C16.757 21.699 19.889 26.713 19.889 31.119 C19.89 35.061 16.975 38.079 13.318 36.813 L13.318 36.813 Z" id="Shape" fill="#F98FB8" sketch:type="MSShapeGroup" mask="url(#mask-2)"/></g><path d="M9.94500336 7.767 L11.2980034 6.537 L9.94500334 5.391 L9.94500336 7.767 Z" id="Shape" fill="#FF6699" sketch:type="MSShapeGroup"/><path d="M14.9450034 14.421 L16.2980034 13.191 L16.6958712 14.986 L14.9450034 14.421 Z" id="Shape" fill="#FF6699" sketch:type="MSShapeGroup"/><path d="M9.94500336 18.402 L11.2980034 17.171 L9.94500336 16.273 L9.94500336 18.402 Z" id="Shape" fill="#FF6699" sketch:type="MSShapeGroup"/></g><g id="Stairs" sketch:type="MSLayerGroup" stroke="#FFFFFF"><path d="M130.909 107.694 L137.114 110.999 L137.774 178.675 " id="Shape" sketch:type="MSShapeGroup"/><path d="M138.504 103.402 L144.709 106.707 L145.369 174.383 " id="Shape" sketch:type="MSShapeGroup"/><path d="M135.811 114.856 L145.913 109.226 " id="Shape" sketch:type="MSShapeGroup"/><path d="M135.811 121.646 L145.913 116.016 " id="Shape" sketch:type="MSShapeGroup"/><path d="M135.811 128.437 L145.913 122.806 " id="Shape" sketch:type="MSShapeGroup"/><path d="M135.811 135.227 L145.913 129.596 " id="Shape" sketch:type="MSShapeGroup"/><path d="M135.811 142.017 L145.913 136.386 " id="Shape" sketch:type="MSShapeGroup"/><path d="M135.811 148.807 L145.913 143.176 " id="Shape" sketch:type="MSShapeGroup"/><path d="M135.811 155.597 L145.913 149.966 " id="Shape" sketch:type="MSShapeGroup"/><path d="M135.811 162.387 L145.913 156.756 " id="Shape" sketch:type="MSShapeGroup"/><path d="M135.811 169.177 L145.913 163.546 " id="Shape" sketch:type="MSShapeGroup"/><path d="M135.811 175.967 L145.913 170.336 " id="Shape" sketch:type="MSShapeGroup"/><path d="M131.836 110.054 L141.938 104.423 " id="Shape" sketch:type="MSShapeGroup"/></g></g></g></svg>'

        this.tes = this.draw.svg(rawSvg)
    },
    womenazi: function () {
        var stairs = this.draw.group();
        stairs.move(130.000000, 103.000000);
        stairs.path('M8.504,0.402 L14.709,3.707 L15.369,71.383');
        stairs.path('M5.811,11.856 L15.913,6.226');
    }
};

routine.init();
//routine.womenazi();