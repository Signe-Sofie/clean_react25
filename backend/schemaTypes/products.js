export default products = 
    {
        name: 'products',
        title:  'Products',
        type:  'document', 
        fields: [
            {
                name: 'poductname',
                type: 'string',
            },
            {
                name: 'price',
                type: 'number',
            },
            {
                name: 'image',
                type: 'image',
            }
        ]
    }