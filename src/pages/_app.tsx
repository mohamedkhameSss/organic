import Layout from '@/compnents/Layout'
import "bootstrap/dist/css/bootstrap.css"
// import "@fortawesome/fontawesome-free/css/all.min.css"
// import "@fortawesome/fontawesome-free/js/all.min.js"
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { config } from "@fortawesome/fontawesome-svg-core";
import { useState , createContext } from 'react';
import AppContext from '@/compnents/AppContextApi';
import { type } from 'os';
import ProductsProvider from '@/compnents/AppContextApi';

// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 


export default function App({ Component, pageProps }: AppProps) {
  
  // const [nameContext ,setNameContext] = useState([
  //   {name:'Fruits',img:'/category1.png',},
  //   {name:'Vegetables',img:'/category2.png',},
  //   {name:'Fresh Nuts',img:'/category3.png',},
  //   {name:'Cleaning',img:'/category4.png',},
  //   {name:'Spice',img:'/category5.png',},
  //   {name:'Juice & Drinks',img:'/category6.png',},
  
  // ]);
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  return(<>
  <ProductsProvider >
  <Layout>
   <Component {...pageProps} />
   </Layout>
   </ProductsProvider>
   </>
   )
}
