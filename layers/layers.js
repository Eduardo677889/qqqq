var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIGraylight_2 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '',
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_3_0.png" /> Campo das Vertentes<br />\
    <img src="styles/legend/_3_1.png" /> Central Mineira<br />\
    <img src="styles/legend/_3_2.png" /> Jequitinhonha<br />\
    <img src="styles/legend/_3_3.png" /> Metropolitana de Belo Horizonte<br />\
    <img src="styles/legend/_3_4.png" /> Noroeste de Minas<br />\
    <img src="styles/legend/_3_5.png" /> Norte de Minas<br />\
    <img src="styles/legend/_3_6.png" /> Oeste de Minas<br />\
    <img src="styles/legend/_3_7.png" /> Sul/Sudoeste de Minas<br />\
    <img src="styles/legend/_3_8.png" /> Triângulo Mineiro/Alto Paranaíba<br />\
    <img src="styles/legend/_3_9.png" /> Vale do Mucuri<br />\
    <img src="styles/legend/_3_10.png" /> Vale do Rio Doce<br />\
    <img src="styles/legend/_3_11.png" /> Zona da Mata<br />\
    <img src="styles/legend/_3_12.png" /> <br />' });

        var lyr_ESRITransportation_4 = new ol.layer.Tile({
            'title': 'ESRI Transportation',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SHAPELT_5 = new ol.format.GeoJSON();
var features_SHAPELT_5 = format_SHAPELT_5.readFeatures(json_SHAPELT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHAPELT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHAPELT_5.addFeatures(features_SHAPELT_5);
var lyr_SHAPELT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHAPELT_5, 
                style: style_SHAPELT_5,
                popuplayertitle: 'SHAPELT',
                interactive: true,
    title: 'SHAPELT<br />\
    <img src="styles/legend/SHAPELT_5_0.png" /> 230.0<br />\
    <img src="styles/legend/SHAPELT_5_1.png" /> 345.0<br />\
    <img src="styles/legend/SHAPELT_5_2.png" /> 440.0<br />\
    <img src="styles/legend/SHAPELT_5_3.png" /> 500.0<br />\
    <img src="styles/legend/SHAPELT_5_4.png" /> 600.0<br />\
    <img src="styles/legend/SHAPELT_5_5.png" /> 800.0<br />\
    <img src="styles/legend/SHAPELT_5_6.png" /> <br />' });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> '
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: '',
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_7_0.png" /> <br />\
    <img src="styles/legend/_7_1.png" /> 12,6 <> 13,9<br />\
    <img src="styles/legend/_7_2.png" /> 14 <> 15,3<br />\
    <img src="styles/legend/_7_3.png" /> 15,4 <> 16,7<br />\
    <img src="styles/legend/_7_4.png" /> 16,8 <> 18<br />\
    <img src="styles/legend/_7_5.png" /> 18,1 <> 19,4<br />\
    <img src="styles/legend/_7_6.png" /> 19,5 <> 20,7<br />\
    <img src="styles/legend/_7_7.png" /> 20,8 <> 22,1<br />\
    <img src="styles/legend/_7_8.png" /> 22,2 <> 23,4<br />\
    <img src="styles/legend/_7_9.png" /> 23,5 <> 24,8<br />\
    <img src="styles/legend/_7_10.png" /> 24,9 <> 26,2<br />' });
var lyr__8 = new ol.layer.Image({
        opacity: 1,
        
    title: '<br />\
    <img src="styles/legend/_8_0.png" /> 0,0000<br />\
    <img src="styles/legend/_8_1.png" /> 1095,0000<br />\
    <img src="styles/legend/_8_2.png" /> 1168,0000<br />\
    <img src="styles/legend/_8_3.png" /> 1241,0000<br />\
    <img src="styles/legend/_8_4.png" /> 1314,0000<br />\
    <img src="styles/legend/_8_5.png" /> 1387,0000<br />\
    <img src="styles/legend/_8_6.png" /> 1460,0000<br />\
    <img src="styles/legend/_8_7.png" /> 1534,0000<br />\
    <img src="styles/legend/_8_8.png" /> 1607,0000<br />\
    <img src="styles/legend/_8_9.png" /> 1680,0000<br />\
    <img src="styles/legend/_8_10.png" /> 1753,0000<br />\
    <img src="styles/legend/_8_11.png" /> 1826,0000<br />\
    <img src="styles/legend/_8_12.png" /> 1899,0000<br />\
    <img src="styles/legend/_8_13.png" /> 1972,0000<br />\
    <img src="styles/legend/_8_14.png" /> 2045,0000<br />\
    <img src="styles/legend/_8_15.png" /> 2118,0000<br />\
    <img src="styles/legend/_8_16.png" /> 2191,0000<br />\
    <img src="styles/legend/_8_17.png" /> 2264,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5683486.446637, -2623640.476378, -4435756.187768, -1599930.739854]
        })
    });
var format_copiar_9 = new ol.format.GeoJSON();
var features_copiar_9 = format_copiar_9.readFeatures(json_copiar_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_copiar_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_copiar_9.addFeatures(features_copiar_9);
var lyr_copiar_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_copiar_9, 
                style: style_copiar_9,
                popuplayertitle: '  copiar',
                interactive: true,
                title: '<img src="styles/legend/copiar_9.png" />   copiar'
            });
var group_IRRADIAOSOLARDIRETA = new ol.layer.Group({
                                layers: [lyr__8,lyr_copiar_9,],
                                fold: 'close',
                                title: 'IRRADIAÇÃO SOLAR DIRETA'});
var group_TEMPERATURAMDIAANUAL = new ol.layer.Group({
                                layers: [lyr__7,],
                                fold: 'close',
                                title: 'TEMPERATURA MÉDIA ANUAL'});
var group_USINASFOTOVOLTAICAS = new ol.layer.Group({
                                layers: [lyr__6,],
                                fold: 'open',
                                title: 'USINAS FOTOVOLTAICAS'});
var group_LINHASDETRANSMISSO = new ol.layer.Group({
                                layers: [lyr_SHAPELT_5,],
                                fold: 'close',
                                title: 'LINHAS DE TRANSMISSÃO'});
var group_RODOVIAS = new ol.layer.Group({
                                layers: [lyr_ESRITransportation_4,],
                                fold: 'close',
                                title: 'RODOVIAS'});
var group_MESOREGIESMINASGERAIS = new ol.layer.Group({
                                layers: [lyr__3,],
                                fold: 'open',
                                title: 'MESOREGIÕES MINAS GERAIS'});
var group_MAPABASE = new ol.layer.Group({
                                layers: [lyr_ESRIGraydark_0,lyr_ESRISatellite_1,lyr_ESRIGraylight_2,],
                                fold: 'close',
                                title: 'MAPA BASE'});

lyr_ESRIGraydark_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_ESRIGraylight_2.setVisible(true);lyr__3.setVisible(true);lyr_ESRITransportation_4.setVisible(true);lyr_SHAPELT_5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr_copiar_9.setVisible(true);
var layersList = [group_MAPABASE,group_MESOREGIESMINASGERAIS,group_RODOVIAS,group_LINHASDETRANSMISSO,group_USINASFOTOVOLTAICAS,group_TEMPERATURAMDIAANUAL,group_IRRADIAOSOLARDIRETA];
lyr__3.set('fieldAliases', {'CD_MESO': 'CD_MESO', 'NM_MESO': 'NM_MESO', 'SIGLA_UF': 'SIGLA_UF', });
lyr_SHAPELT_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descri____': 'descri____', 'concession': 'concession', 'tensao': 'tensao', 'extensao': 'extensao', 'ano_opera': 'ano_opera', 'shape_stle': 'shape_stle', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'created_us': 'created_us', 'created_da': 'created_da', });
lyr__6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'CEG': 'CEG', 'POT__NCIA_INSTALADA_KW': 'POT__NCIA_INSTALADA_KW', 'DATA_EM_OPERA____O': 'DATA_EM_OPERA____O', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr__7.set('fieldAliases', {'gridcode': 'gridcode', 'indicador': 'indicador', });
lyr_copiar_9.set('fieldAliases', {'CD_MESO': 'CD_MESO', 'NM_MESO': 'NM_MESO', 'SIGLA_UF': 'SIGLA_UF', });
lyr__3.set('fieldImages', {'CD_MESO': 'TextEdit', 'NM_MESO': 'TextEdit', 'SIGLA_UF': 'TextEdit', });
lyr_SHAPELT_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descri____': 'TextEdit', 'concession': 'TextEdit', 'tensao': 'TextEdit', 'extensao': 'TextEdit', 'ano_opera': 'TextEdit', 'shape_stle': 'TextEdit', 'last_edite': 'TextEdit', 'last_edi_1': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'TextEdit', });
lyr__6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'CEG': 'TextEdit', 'POT__NCIA_INSTALADA_KW': 'TextEdit', 'DATA_EM_OPERA____O': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr__7.set('fieldImages', {'gridcode': 'TextEdit', 'indicador': 'TextEdit', });
lyr_copiar_9.set('fieldImages', {'CD_MESO': 'TextEdit', 'NM_MESO': 'TextEdit', 'SIGLA_UF': 'TextEdit', });
lyr__3.set('fieldLabels', {'CD_MESO': 'hidden field', 'NM_MESO': 'no label', 'SIGLA_UF': 'hidden field', });
lyr_SHAPELT_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descri____': 'no label', 'concession': 'no label', 'tensao': 'no label', 'extensao': 'no label', 'ano_opera': 'no label', 'shape_stle': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'created_us': 'no label', 'created_da': 'no label', });
lyr__6.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'CEG': 'hidden field', 'POT__NCIA_INSTALADA_KW': 'inline label - always visible', 'DATA_EM_OPERA____O': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr__7.set('fieldLabels', {'gridcode': 'no label', 'indicador': 'no label', });
lyr_copiar_9.set('fieldLabels', {'CD_MESO': 'hidden field', 'NM_MESO': 'no label', 'SIGLA_UF': 'hidden field', });
lyr_copiar_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});