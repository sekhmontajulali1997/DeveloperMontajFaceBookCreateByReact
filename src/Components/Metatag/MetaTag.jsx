import { Helmet } from "react-helmet"

const MetaTag = ({title}) => {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="icon" type="image/x-icon" href="https://fabriclore.com/cdn/shop/files/Facebook_Logo__2019.png?v=1671449378&width=768"/>
            </Helmet>
    </>
  )
}

export default MetaTag