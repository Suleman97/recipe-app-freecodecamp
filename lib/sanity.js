import {
  createClient,
  createPreviewSubscriptionHook,
  createPortableTextComponent,
  createImageUrlBuilder,
} from 'next-sanity';

const config = {
  projectId: '7v0llspi',
  dataset: 'production',
  apiversion: '2021-06-07',
  useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubcription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const potableText = createPortableTextComponent({
  ...config,
  serializers: {},
});
