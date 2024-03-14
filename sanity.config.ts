import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'SanityShop',

  projectId: '43nxtx6h',
  dataset: 'production',
  apiVersion: '2023-03-15',
  basePath: "/admin",
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
