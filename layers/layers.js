var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KelurahanSukur_1 = new ol.format.GeoJSON();
var features_KelurahanSukur_1 = format_KelurahanSukur_1.readFeatures(json_KelurahanSukur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelurahanSukur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanSukur_1.addFeatures(features_KelurahanSukur_1);
var lyr_KelurahanSukur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanSukur_1, 
                style: style_KelurahanSukur_1,
                popuplayertitle: 'Kelurahan Sukur',
                interactive: true,
                title: '<img src="styles/legend/KelurahanSukur_1.png" /> Kelurahan Sukur'
            });
var format_SDInpresSukur_2 = new ol.format.GeoJSON();
var features_SDInpresSukur_2 = format_SDInpresSukur_2.readFeatures(json_SDInpresSukur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDInpresSukur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDInpresSukur_2.addFeatures(features_SDInpresSukur_2);
var lyr_SDInpresSukur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDInpresSukur_2, 
                style: style_SDInpresSukur_2,
                popuplayertitle: 'SD Inpres Sukur',
                interactive: true,
                title: '<img src="styles/legend/SDInpresSukur_2.png" /> SD Inpres Sukur'
            });
var format_SDGMIM46Sukur_3 = new ol.format.GeoJSON();
var features_SDGMIM46Sukur_3 = format_SDGMIM46Sukur_3.readFeatures(json_SDGMIM46Sukur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDGMIM46Sukur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDGMIM46Sukur_3.addFeatures(features_SDGMIM46Sukur_3);
var lyr_SDGMIM46Sukur_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDGMIM46Sukur_3, 
                style: style_SDGMIM46Sukur_3,
                popuplayertitle: 'SD GMIM 46 Sukur',
                interactive: true,
                title: '<img src="styles/legend/SDGMIM46Sukur_3.png" /> SD GMIM 46 Sukur'
            });
var format_RAAlmuhajirinSukur_4 = new ol.format.GeoJSON();
var features_RAAlmuhajirinSukur_4 = format_RAAlmuhajirinSukur_4.readFeatures(json_RAAlmuhajirinSukur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAAlmuhajirinSukur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAAlmuhajirinSukur_4.addFeatures(features_RAAlmuhajirinSukur_4);
var lyr_RAAlmuhajirinSukur_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAAlmuhajirinSukur_4, 
                style: style_RAAlmuhajirinSukur_4,
                popuplayertitle: 'RA Almuhajirin Sukur',
                interactive: true,
                title: '<img src="styles/legend/RAAlmuhajirinSukur_4.png" /> RA Almuhajirin Sukur'
            });
var format_TKMutiaraBagiBangsaSukur_5 = new ol.format.GeoJSON();
var features_TKMutiaraBagiBangsaSukur_5 = format_TKMutiaraBagiBangsaSukur_5.readFeatures(json_TKMutiaraBagiBangsaSukur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TKMutiaraBagiBangsaSukur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TKMutiaraBagiBangsaSukur_5.addFeatures(features_TKMutiaraBagiBangsaSukur_5);
var lyr_TKMutiaraBagiBangsaSukur_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TKMutiaraBagiBangsaSukur_5, 
                style: style_TKMutiaraBagiBangsaSukur_5,
                popuplayertitle: 'TK Mutiara Bagi Bangsa Sukur',
                interactive: true,
                title: '<img src="styles/legend/TKMutiaraBagiBangsaSukur_5.png" /> TK Mutiara Bagi Bangsa Sukur'
            });
var format_SekolahMBBWanuaUreSukur_6 = new ol.format.GeoJSON();
var features_SekolahMBBWanuaUreSukur_6 = format_SekolahMBBWanuaUreSukur_6.readFeatures(json_SekolahMBBWanuaUreSukur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahMBBWanuaUreSukur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahMBBWanuaUreSukur_6.addFeatures(features_SekolahMBBWanuaUreSukur_6);
var lyr_SekolahMBBWanuaUreSukur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SekolahMBBWanuaUreSukur_6, 
                style: style_SekolahMBBWanuaUreSukur_6,
                popuplayertitle: 'Sekolah MBB Wanua Ure Sukur',
                interactive: true,
                title: '<img src="styles/legend/SekolahMBBWanuaUreSukur_6.png" /> Sekolah MBB Wanua Ure Sukur'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KelurahanSukur_1.setVisible(true);lyr_SDInpresSukur_2.setVisible(true);lyr_SDGMIM46Sukur_3.setVisible(true);lyr_RAAlmuhajirinSukur_4.setVisible(true);lyr_TKMutiaraBagiBangsaSukur_5.setVisible(true);lyr_SekolahMBBWanuaUreSukur_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KelurahanSukur_1,lyr_SDInpresSukur_2,lyr_SDGMIM46Sukur_3,lyr_RAAlmuhajirinSukur_4,lyr_TKMutiaraBagiBangsaSukur_5,lyr_SekolahMBBWanuaUreSukur_6];
lyr_KelurahanSukur_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_SDInpresSukur_2.set('fieldAliases', {'id': 'id', });
lyr_SDGMIM46Sukur_3.set('fieldAliases', {'id': 'id', });
lyr_RAAlmuhajirinSukur_4.set('fieldAliases', {'id': 'id', });
lyr_TKMutiaraBagiBangsaSukur_5.set('fieldAliases', {'id': 'id', });
lyr_SekolahMBBWanuaUreSukur_6.set('fieldAliases', {'id': 'id', });
lyr_KelurahanSukur_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_SDInpresSukur_2.set('fieldImages', {'id': 'TextEdit', });
lyr_SDGMIM46Sukur_3.set('fieldImages', {'id': 'TextEdit', });
lyr_RAAlmuhajirinSukur_4.set('fieldImages', {'id': 'TextEdit', });
lyr_TKMutiaraBagiBangsaSukur_5.set('fieldImages', {'id': 'TextEdit', });
lyr_SekolahMBBWanuaUreSukur_6.set('fieldImages', {'id': 'TextEdit', });
lyr_KelurahanSukur_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_SDInpresSukur_2.set('fieldLabels', {'id': 'no label', });
lyr_SDGMIM46Sukur_3.set('fieldLabels', {'id': 'no label', });
lyr_RAAlmuhajirinSukur_4.set('fieldLabels', {'id': 'no label', });
lyr_TKMutiaraBagiBangsaSukur_5.set('fieldLabels', {'id': 'no label', });
lyr_SekolahMBBWanuaUreSukur_6.set('fieldLabels', {'id': 'no label', });
lyr_SekolahMBBWanuaUreSukur_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});