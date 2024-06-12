import Head from "next/head";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import Header from "@/components/Header";
import { Button, Col, Container, Row } from "reactstrap";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Início</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main >
        <Container className="py-5 text-center">
          <h1 className="mt-5 display-1">
            O melhor jeito de comprar o que você ama
          </h1>
          <p className="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae iusto voluptatem obcaecati omnis error architecto neque cum exercitationem fugiat. Vero illo autem eum nisi sapiente, odio optio accusamus cupiditate ad.
          </p>
          <Container>
            <Row className="justify-content-center">
              <Col md="auto" className="mb-3 me-md-2"> {/* Margem inferior para mobile, margem direita para desktop */}
                <Link href="/products">
                  <Button color="dark" className="px-4 pb-2">
                    Conheça nossos produtos!
                  </Button>
                </Link>
              </Col>
              <Col md="auto" className="mb-3"> {/* Margem inferior para mobile */}
                <Link href="/dynamic">
                  <Button color="dark" className="px-4 pb-2">
                    Exemplo render dinâmico!
                  </Button>
                </Link>
              </Col>
              <Col md="auto" className="ms-md-2 mb-3"> {/* Margem inferior para mobile */}
                <Link href="/static">
                  <Button color="dark" className="px-4 pb-2">
                    Exemplo render estático!
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
      </main>
    </>
  );
}

export default Home;