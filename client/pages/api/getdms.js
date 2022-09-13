import { client } from '../../lib/client'

const query = `*[_type == "conversations" && isDm==true]{
  "conversation": userReference->{
    name,
    walletAddress,
    "image": profileImage.asset->url
  }
}`

export default async (req, res) => { }
