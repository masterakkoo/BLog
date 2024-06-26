import "@styles/global.css";
import Nav from "@components/navbar";
import Provider from "@components/Provider";

export const metadata = {
  title: "Blog Website",
  description: "Discover & Share thoughts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
