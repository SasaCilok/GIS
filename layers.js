var wms_layers = [];

var format_gadm41_IDN_shpgadm41_IDN_4_0 = new ol.format.GeoJSON();
var features_gadm41_IDN_shpgadm41_IDN_4_0 = format_gadm41_IDN_shpgadm41_IDN_4_0.readFeatures(json_gadm41_IDN_shpgadm41_IDN_4_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDN_shpgadm41_IDN_4_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDN_shpgadm41_IDN_4_0.addFeatures(features_gadm41_IDN_shpgadm41_IDN_4_0);
var lyr_gadm41_IDN_shpgadm41_IDN_4_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDN_shpgadm41_IDN_4_0, 
                style: style_gadm41_IDN_shpgadm41_IDN_4_0,
                popuplayertitle: "gadm41_IDN_shp — gadm41_IDN_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDN_shpgadm41_IDN_4_0.png" /> gadm41_IDN_shp — gadm41_IDN_4'
            });
var format_BatasRW_1 = new ol.format.GeoJSON();
var features_BatasRW_1 = format_BatasRW_1.readFeatures(json_BatasRW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRW_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRW_1.addFeatures(features_BatasRW_1);
var lyr_BatasRW_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRW_1, 
                style: style_BatasRW_1,
                popuplayertitle: "Batas RW",
                interactive: true,
    title: 'Batas RW<br />\
    <img src="styles/legend/BatasRW_1_0.png" /> RW 01<br />\
    <img src="styles/legend/BatasRW_1_1.png" /> RW 02<br />\
    <img src="styles/legend/BatasRW_1_2.png" /> RW 03<br />\
    <img src="styles/legend/BatasRW_1_3.png" /> RW 04<br />\
    <img src="styles/legend/BatasRW_1_4.png" /> <br />'
        });
var format_DesaPetir_poly_2 = new ol.format.GeoJSON();
var features_DesaPetir_poly_2 = format_DesaPetir_poly_2.readFeatures(json_DesaPetir_poly_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaPetir_poly_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaPetir_poly_2.addFeatures(features_DesaPetir_poly_2);
var lyr_DesaPetir_poly_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaPetir_poly_2, 
                style: style_DesaPetir_poly_2,
                popuplayertitle: "Desa Petir_poly",
                interactive: true,
                title: '<img src="styles/legend/DesaPetir_poly_2.png" /> Desa Petir_poly'
            });
var format_DesaPetir_line_3 = new ol.format.GeoJSON();
var features_DesaPetir_line_3 = format_DesaPetir_line_3.readFeatures(json_DesaPetir_line_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaPetir_line_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaPetir_line_3.addFeatures(features_DesaPetir_line_3);
var lyr_DesaPetir_line_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaPetir_line_3, 
                style: style_DesaPetir_line_3,
                popuplayertitle: "Desa Petir_line",
                interactive: true,
                title: '<img src="styles/legend/DesaPetir_line_3.png" /> Desa Petir_line'
            });
var format_Pendidikan_4 = new ol.format.GeoJSON();
var features_Pendidikan_4 = format_Pendidikan_4.readFeatures(json_Pendidikan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_4.addFeatures(features_Pendidikan_4);
var lyr_Pendidikan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_4, 
                style: style_Pendidikan_4,
                popuplayertitle: "Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_4.png" /> Pendidikan'
            });
var format_UMKM_5 = new ol.format.GeoJSON();
var features_UMKM_5 = format_UMKM_5.readFeatures(json_UMKM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_5.addFeatures(features_UMKM_5);
var lyr_UMKM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKM_5, 
                style: style_UMKM_5,
                popuplayertitle: "UMKM",
                interactive: true,
                title: '<img src="styles/legend/UMKM_5.png" /> UMKM'
            });
var format_Ibadah_6 = new ol.format.GeoJSON();
var features_Ibadah_6 = format_Ibadah_6.readFeatures(json_Ibadah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibadah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibadah_6.addFeatures(features_Ibadah_6);
var lyr_Ibadah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ibadah_6, 
                style: style_Ibadah_6,
                popuplayertitle: "Ibadah",
                interactive: true,
                title: '<img src="styles/legend/Ibadah_6.png" /> Ibadah'
            });
var format_Lapangan_7 = new ol.format.GeoJSON();
var features_Lapangan_7 = format_Lapangan_7.readFeatures(json_Lapangan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_7.addFeatures(features_Lapangan_7);
var lyr_Lapangan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_7, 
                style: style_Lapangan_7,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_7.png" /> Lapangan'
            });
var format_Kesehatan_8 = new ol.format.GeoJSON();
var features_Kesehatan_8 = format_Kesehatan_8.readFeatures(json_Kesehatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_8.addFeatures(features_Kesehatan_8);
var lyr_Kesehatan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_8, 
                style: style_Kesehatan_8,
                popuplayertitle: "Kesehatan",
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_8.png" /> Kesehatan'
            });
var format_Rumah_9 = new ol.format.GeoJSON();
var features_Rumah_9 = format_Rumah_9.readFeatures(json_Rumah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_9.addFeatures(features_Rumah_9);
var lyr_Rumah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_9, 
                style: style_Rumah_9,
                popuplayertitle: "Rumah",
                interactive: true,
                title: '<img src="styles/legend/Rumah_9.png" /> Rumah'
            });

lyr_gadm41_IDN_shpgadm41_IDN_4_0.setVisible(true);lyr_BatasRW_1.setVisible(true);lyr_DesaPetir_poly_2.setVisible(true);lyr_DesaPetir_line_3.setVisible(true);lyr_Pendidikan_4.setVisible(true);lyr_UMKM_5.setVisible(true);lyr_Ibadah_6.setVisible(true);lyr_Lapangan_7.setVisible(true);lyr_Kesehatan_8.setVisible(true);lyr_Rumah_9.setVisible(true);
var layersList = [lyr_gadm41_IDN_shpgadm41_IDN_4_0,lyr_BatasRW_1,lyr_DesaPetir_poly_2,lyr_DesaPetir_line_3,lyr_Pendidikan_4,lyr_UMKM_5,lyr_Ibadah_6,lyr_Lapangan_7,lyr_Kesehatan_8,lyr_Rumah_9];
lyr_gadm41_IDN_shpgadm41_IDN_4_0.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_BatasRW_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_DesaPetir_poly_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'status': 'status', 'aeroway': 'aeroway', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', });
lyr_DesaPetir_line_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_Pendidikan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_UMKM_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Ibadah_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kesehatan_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Rumah_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_gadm41_IDN_shpgadm41_IDN_4_0.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_BatasRW_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_DesaPetir_poly_2.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_type': '', 'health_fac': '', 'depth': '', 'railway': '', 'operator_t': '', 'blockage': '', 'roof_mater': '', 'amenity': '', 'name': '', 'staff_coun': '', 'public_tra': '', 'width': '', 'access': '', 'bridge': '', 'smoothness': '', 'landuse': '', 'covered': '', 'staff_co_1': '', 'diameter': '', 'access_roo': '', 'building_m': '', 'healthcare': '', 'opening_ho': '', 'isced_leve': '', 'denominati': '', 'historic': '', 'status': '', 'aeroway': '', 'toilets_di': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'health_f_1': '', 'emergency': '', 'highway': '', 'water': '', 'surface': '', 'pump': '', 'natural': '', 'oneway': '', 'addr_stree': '', 'toilets_ha': '', 'health_f_2': '', 'layer': '', 'shop': '', 'medical_sy': '', 'addr_house': '', 'religion': '', });
lyr_DesaPetir_line_3.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_Pendidikan_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_UMKM_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Ibadah_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kesehatan_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Rumah_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_gadm41_IDN_shpgadm41_IDN_4_0.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_BatasRW_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_DesaPetir_poly_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'status': 'no label', 'aeroway': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', });
lyr_DesaPetir_line_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_Pendidikan_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_UMKM_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Ibadah_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Lapangan_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Kesehatan_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Rumah_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Rumah_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});