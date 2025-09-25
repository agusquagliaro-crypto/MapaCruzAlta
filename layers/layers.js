var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_PuntosFijos_2 = new ol.format.GeoJSON();
var features_PuntosFijos_2 = format_PuntosFijos_2.readFeatures(json_PuntosFijos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosFijos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosFijos_2.addFeatures(features_PuntosFijos_2);
cluster_PuntosFijos_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PuntosFijos_2
});
var lyr_PuntosFijos_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PuntosFijos_2, 
                style: style_PuntosFijos_2,
                popuplayertitle: 'Puntos Fijos',
                interactive: true,
    title: 'Puntos Fijos<br />\
    <img src="styles/legend/PuntosFijos_2_0.png" /> Densificacion<br />\
    <img src="styles/legend/PuntosFijos_2_1.png" /> Punto Base<br />' });
var format_Reddegestiondecalles_3 = new ol.format.GeoJSON();
var features_Reddegestiondecalles_3 = format_Reddegestiondecalles_3.readFeatures(json_Reddegestiondecalles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reddegestiondecalles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reddegestiondecalles_3.addFeatures(features_Reddegestiondecalles_3);
var lyr_Reddegestiondecalles_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reddegestiondecalles_3, 
                style: style_Reddegestiondecalles_3,
                popuplayertitle: 'Red de gestion de calles',
                interactive: true,
    title: 'Red de gestion de calles<br />\
    <img src="styles/legend/Reddegestiondecalles_3_0.png" /> Cordon cuneta (Sin pav.)<br />\
    <img src="styles/legend/Reddegestiondecalles_3_1.png" /> Pavimento<br />' });
var format_Distibuciondeaguapotable_4 = new ol.format.GeoJSON();
var features_Distibuciondeaguapotable_4 = format_Distibuciondeaguapotable_4.readFeatures(json_Distibuciondeaguapotable_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distibuciondeaguapotable_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distibuciondeaguapotable_4.addFeatures(features_Distibuciondeaguapotable_4);
var lyr_Distibuciondeaguapotable_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distibuciondeaguapotable_4, 
                style: style_Distibuciondeaguapotable_4,
                popuplayertitle: 'Distibucion de agua potable',
                interactive: true,
                title: '<img src="styles/legend/Distibuciondeaguapotable_4.png" /> Distibucion de agua potable'
            });
var format_ParcelasZonificacion_5 = new ol.format.GeoJSON();
var features_ParcelasZonificacion_5 = format_ParcelasZonificacion_5.readFeatures(json_ParcelasZonificacion_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelasZonificacion_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasZonificacion_5.addFeatures(features_ParcelasZonificacion_5);
var lyr_ParcelasZonificacion_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelasZonificacion_5, 
                style: style_ParcelasZonificacion_5,
                popuplayertitle: 'Parcelas (Zonificacion)',
                interactive: true,
    title: 'Parcelas (Zonificacion)<br />\
    <img src="styles/legend/ParcelasZonificacion_5_0.png" /> AREA DE PROHIBICION<br />\
    <img src="styles/legend/ParcelasZonificacion_5_1.png" /> CENTRICA COMERCIAL<br />\
    <img src="styles/legend/ParcelasZonificacion_5_2.png" /> COMERCIAL<br />\
    <img src="styles/legend/ParcelasZonificacion_5_3.png" /> INDUSTRIAL A<br />\
    <img src="styles/legend/ParcelasZonificacion_5_4.png" /> INDUSTRIAL B<br />\
    <img src="styles/legend/ParcelasZonificacion_5_5.png" /> RESIDENCIAL 1<br />\
    <img src="styles/legend/ParcelasZonificacion_5_6.png" /> RESIDENCIAL 2<br />\
    <img src="styles/legend/ParcelasZonificacion_5_7.png" /> RESIDENCIAL 3<br />\
    <img src="styles/legend/ParcelasZonificacion_5_8.png" /> RESIDENCIAL-QUINTAS<br />\
    <img src="styles/legend/ParcelasZonificacion_5_9.png" /> RESTO URBANIZADA<br />' });
var format_ParcelasCatastro_6 = new ol.format.GeoJSON();
var features_ParcelasCatastro_6 = format_ParcelasCatastro_6.readFeatures(json_ParcelasCatastro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelasCatastro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasCatastro_6.addFeatures(features_ParcelasCatastro_6);
var lyr_ParcelasCatastro_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelasCatastro_6, 
                style: style_ParcelasCatastro_6,
                popuplayertitle: 'Parcelas (Catastro)',
                interactive: true,
                title: '<img src="styles/legend/ParcelasCatastro_6.png" /> Parcelas (Catastro)'
            });
var group_IDECOR = new ol.layer.Group({
                                layers: [lyr_Reddegestiondecalles_3,lyr_Distibuciondeaguapotable_4,lyr_ParcelasZonificacion_5,lyr_ParcelasCatastro_6,],
                                fold: 'open',
                                title: 'IDECOR'});

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatelite_1.setVisible(true);lyr_PuntosFijos_2.setVisible(false);lyr_Reddegestiondecalles_3.setVisible(false);lyr_Distibuciondeaguapotable_4.setVisible(false);lyr_ParcelasZonificacion_5.setVisible(false);lyr_ParcelasCatastro_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,lyr_PuntosFijos_2,group_IDECOR];
lyr_PuntosFijos_2.set('fieldAliases', {'ID': 'ID', 'Y': 'Y', 'X': 'X', 'Tipo': 'Tipo', 'Z': 'Z', });
lyr_Reddegestiondecalles_3.set('fieldAliases', {'Estado': 'Estado', });
lyr_Distibuciondeaguapotable_4.set('fieldAliases', {});
lyr_ParcelasZonificacion_5.set('fieldAliases', {'Nomencl': 'Nomencl', 'Estado': 'Estado', 'Desig_Of': 'Desig_Of', 'Rentas': 'Rentas', 'Cuenta': 'Cuenta', 'Muni_CUIM': 'Muni_CUIM', 'Muni_Mz': 'Muni_Mz', 'Muni_Lote': 'Muni_Lote', 'Muni_Calle': 'Muni_Calle', 'Muni_Nro': 'Muni_Nro', 'CIR': 'CIR', 'SEC': 'SEC', 'MAN': 'MAN', 'PAR': 'PAR', 'Zona': 'Zona', 'SupMin [m]': 'SupMin [m]', 'Retiro': 'Retiro', 'AltMax': 'AltMax', 'FreMin [m]': 'FreMin [m]', 'FOT': 'FOT', 'FOS': 'FOS', });
lyr_ParcelasCatastro_6.set('fieldAliases', {'Nomencl': 'Nomencl', 'Estado': 'Estado', 'Desig_Of': 'Desig_Of', 'ValTotal': 'ValTotal', 'SupUrbana': 'SupUrbana', 'ValTerreno': 'ValTerreno', 'SupRural': 'SupRural', 'SupEdif': 'SupEdif', 'ValEdif': 'ValEdif', 'Rentas': 'Rentas', 'Cuenta': 'Cuenta', 'Muni_CUIM': 'Muni_CUIM', 'Muni_Mz': 'Muni_Mz', 'Muni_Lote': 'Muni_Lote', 'Muni_Calle': 'Muni_Calle', 'Muni_Nro': 'Muni_Nro', 'Muni_Estad': 'Muni_Estad', 'CIR': 'CIR', 'SEC': 'SEC', 'MAN': 'MAN', 'PAR': 'PAR', });
lyr_PuntosFijos_2.set('fieldImages', {'ID': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Tipo': 'TextEdit', 'Z': 'TextEdit', });
lyr_Reddegestiondecalles_3.set('fieldImages', {'Estado': 'TextEdit', });
lyr_Distibuciondeaguapotable_4.set('fieldImages', {});
lyr_ParcelasZonificacion_5.set('fieldImages', {'Nomencl': 'TextEdit', 'Estado': 'TextEdit', 'Desig_Of': 'TextEdit', 'Rentas': 'TextEdit', 'Cuenta': 'TextEdit', 'Muni_CUIM': 'TextEdit', 'Muni_Mz': 'TextEdit', 'Muni_Lote': 'TextEdit', 'Muni_Calle': 'TextEdit', 'Muni_Nro': 'TextEdit', 'CIR': 'TextEdit', 'SEC': 'TextEdit', 'MAN': 'TextEdit', 'PAR': 'TextEdit', 'Zona': 'TextEdit', 'SupMin [m]': 'TextEdit', 'Retiro': 'TextEdit', 'AltMax': 'TextEdit', 'FreMin [m]': 'TextEdit', 'FOT': 'TextEdit', 'FOS': 'TextEdit', });
lyr_ParcelasCatastro_6.set('fieldImages', {'Nomencl': 'TextEdit', 'Estado': 'TextEdit', 'Desig_Of': 'TextEdit', 'ValTotal': 'TextEdit', 'SupUrbana': 'TextEdit', 'ValTerreno': 'TextEdit', 'SupRural': 'TextEdit', 'SupEdif': 'TextEdit', 'ValEdif': 'TextEdit', 'Rentas': 'TextEdit', 'Cuenta': 'TextEdit', 'Muni_CUIM': 'TextEdit', 'Muni_Mz': 'TextEdit', 'Muni_Lote': 'TextEdit', 'Muni_Calle': 'TextEdit', 'Muni_Nro': 'TextEdit', 'Muni_Estad': 'TextEdit', 'CIR': 'TextEdit', 'SEC': 'TextEdit', 'MAN': 'TextEdit', 'PAR': 'TextEdit', });
lyr_PuntosFijos_2.set('fieldLabels', {'ID': 'inline label - always visible', 'Y': 'inline label - always visible', 'X': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Z': 'inline label - always visible', });
lyr_Reddegestiondecalles_3.set('fieldLabels', {'Estado': 'inline label - always visible', });
lyr_Distibuciondeaguapotable_4.set('fieldLabels', {});
lyr_ParcelasZonificacion_5.set('fieldLabels', {'Nomencl': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Desig_Of': 'inline label - always visible', 'Rentas': 'inline label - always visible', 'Cuenta': 'inline label - always visible', 'Muni_CUIM': 'inline label - always visible', 'Muni_Mz': 'inline label - always visible', 'Muni_Lote': 'inline label - always visible', 'Muni_Calle': 'inline label - always visible', 'Muni_Nro': 'inline label - always visible', 'CIR': 'inline label - always visible', 'SEC': 'inline label - always visible', 'MAN': 'inline label - always visible', 'PAR': 'inline label - always visible', 'Zona': 'inline label - always visible', 'SupMin [m]': 'inline label - always visible', 'Retiro': 'inline label - always visible', 'AltMax': 'inline label - always visible', 'FreMin [m]': 'inline label - always visible', 'FOT': 'inline label - always visible', 'FOS': 'inline label - always visible', });
lyr_ParcelasCatastro_6.set('fieldLabels', {'Nomencl': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Desig_Of': 'inline label - always visible', 'ValTotal': 'inline label - always visible', 'SupUrbana': 'inline label - always visible', 'ValTerreno': 'inline label - always visible', 'SupRural': 'inline label - always visible', 'SupEdif': 'inline label - always visible', 'ValEdif': 'inline label - always visible', 'Rentas': 'inline label - always visible', 'Cuenta': 'inline label - always visible', 'Muni_CUIM': 'inline label - always visible', 'Muni_Mz': 'inline label - always visible', 'Muni_Lote': 'inline label - always visible', 'Muni_Calle': 'inline label - always visible', 'Muni_Nro': 'inline label - always visible', 'Muni_Estad': 'inline label - always visible', 'CIR': 'inline label - always visible', 'SEC': 'inline label - always visible', 'MAN': 'inline label - always visible', 'PAR': 'inline label - always visible', });
lyr_ParcelasCatastro_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});