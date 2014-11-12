Drupal Leaflet ZoomFS
=====================

Integrates the leaflet [zoomfs](http://elidupuis.github.io/leaflet.zoomfs/) plugin with the Drupal leaflet module.

Usage
-----

Add the `$map_definition[plugins][zoomfs]` key to your map definition, and set the value to `TRUE`.

    function MYMODULE_leaflet_map_info() {
      return array(
        'Map Name' => array(
          'label' => 'Some Label',
          'description' => t('Some Description'),
          'settings' => array(
            // ...
          ),
          'layers' => array(
            // ...
          ),
          'plugins' => array(
            'zoomfs' => TRUE,
          )
        ),
      );
    }
