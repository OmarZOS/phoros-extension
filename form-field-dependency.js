jQuery(function($) {
    $('[data-depends]').formFieldDependency();
});

$.fn.formFieldDependency({
    'rules': {
        '#only-email': {
            '#InputEmail': { 'type': 'regexp', 'pattern': '[a-z]+@[a-z]+.[a-z]', 'modifier': 'i' }
        },
        '#only-equal': {
            '#InputEmail': { 'type': 'equal', 'value': ['lorem', 'ipsum'] }
        }
    }
});

$('[data-depends]').formFieldDependency({
    'attribute': 'data-depends', // Attribute name where you write your roles
    'rules': {
        'DependencySelector': { // like #id, .class, input[name]
            'DependsOnSelector': { 'type': 'regexp', 'pattern': '[a-z]+@[a-z]+.[a-z]', 'modifier': 'i' }
        },
        'DependencySelector': {
            'DependsOnSelector': { 'type': 'equal', 'value': ['lorem', 'ipsum'] }
        }
    }
});