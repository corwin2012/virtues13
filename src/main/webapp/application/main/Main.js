
Ext.define('Virtunes13.main.Main',{
    extend: 'Ext.container.Container',
    xtype: 'main',
    layout: 'border',
    items: [
        {
            region: 'west',
            xtype: 'panel',
            title: 'west'
        },{
            region: 'east',
            xtype: 'panel',
            title: 'east'
        },{
            region: 'center',
            xtype: 'panel',
            title: 'center'
        }

    ]
});