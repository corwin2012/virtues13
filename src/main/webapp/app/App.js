
Ext.Loader.setConfig({enabled:true});

Ext.application({
    name: 'Virtunes13',

    appFolder: 'application',

    //controllers: ['Virtunes13'],
    autoCreateViewport: 'Virtunes13.main.Main'
/*    launch: function() {
        Ext.require('Virtunes13.main.Main');
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'main'
                }
            ]
        });
    }*/
});