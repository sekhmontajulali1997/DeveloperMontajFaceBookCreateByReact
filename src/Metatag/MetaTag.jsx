import { Helmet } from "react-helmet"

const MetaTag = ({title}) => {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="icon" type="image/x-icon" href="https://media.licdn.com/dms/image/C5622AQE8dBmMSgt38A/feedshare-shrink_2048_1536/0/1601047634450?e=2147483647&v=beta&t=vQYE1WW-skRzXZPASqdodNFGE9Dya-v3lClatzZR-Iw"/>
            </Helmet>
    </>
  )
}

export default MetaTag