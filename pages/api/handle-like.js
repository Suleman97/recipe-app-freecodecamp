import { sanityClient } from '../../lib/sanity'


sanityClient.config({
  token: 'TOKEN HERE',
});

export default async function likeButtonHandler(req, res, next) {
  const { _id } = JSON.parse(req.body)
  const data = await sanityClient
    .patch(_id, data)
    .setIfMissing({ likes: 0 })
    .inc({ likes: 1 })
    .commit()
    .catch((error) => console.error(error))

  res.status(200).json({ likes: data.likes })
}