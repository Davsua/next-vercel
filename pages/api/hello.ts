// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string,
}

// tipado estricto para la respuesta con el type Data en la respuesta que espero recibir
export default function handler(req:NextApiRequest , res:NextApiResponse<Data> ) {
  res.status(200).json({ name: 'John Doe' })
}
