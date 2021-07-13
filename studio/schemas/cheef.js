/* eslint-disable import/no-anonymous-default-export */

export default {
  name: chef,
  title: 'Chef',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: "Chef's Name",
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },

  ]
}