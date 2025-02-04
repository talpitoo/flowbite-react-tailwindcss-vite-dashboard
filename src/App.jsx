/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Flowbite } from "flowbite-react";
import primeRevenueFlowbiteTheme from "./themes/primeRevenueFlowbiteTheme";
import {
  Card,
  Modal,
  Banner,
  Accordion,
  Checkbox,
  Label,
  Table,
  Alert,
  Button,
  TextInput,
  Textarea,
  Breadcrumb,
  Badge,
  RangeSlider,
  Dropdown,
} from "flowbite-react";
import AdaptiveSidebar from "./components/AdaptiveSidebar";
import TopNavbar from "./components/TopNavbar";
import Chart from "./components/Chart";
import {
  HiX,
  HiUser,
  HiOutlineArrowRight,
  HiQuestionMarkCircle,
  HiHome,
  HiDocument,
  HiEye,
  HiCheckCircle,
} from "react-icons/hi";

function App() {
  const [openModal, setOpenModal] = useState(true);
  const [salary, setSalary] = useState(1000);

  return (
    <>
      <Flowbite theme={{ theme: primeRevenueFlowbiteTheme }} >
        <header>
          <TopNavbar />
        </header>
        {/* 
          NOTE: additional/custom/inline TailwindCSS classes
            - .min-h-screen and in general the <header>, <main>, <aside> are all part of the global responsive layout
        */}
        <main className="min-h-screen">
          {/* 
            NOTE: additional/custom/inline TailwindCSS classes
              - adaptive sidebar layout, desktop
          */}
          <AdaptiveSidebar desktop />
          {/* 
            NOTE: additional/custom/inline TailwindCSS classes
              - custom container .mx-auto...
          */}
          <div className="mx-auto space-y-4 p-4">
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="#" icon={HiHome}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">View Invoices</Breadcrumb.Item>
              <Breadcrumb.Item>Unpaid Approved Invoices</Breadcrumb.Item>
            </Breadcrumb>
            {/* 
              NOTE: additional/custom/inline TailwindCSS classes
                - .overflow-hidden is added because of the nested table
            */}
            <Card className="overflow-hidden">
              {/* 
                NOTE: additional/custom/inline TailwindCSS classes
                  - `additionalContent` is custom, although very similar to the Flowbite React example
              */}
              <Alert
                additionalContent={
                  <>
                    <div className="mb-4 mt-2 text-sm">
                      Aww yeah, you successfully read this important alert
                      message. This example text is going to run a bit longer so
                      that you can see how spacing within an alert works with
                      this kind of content. Lorem ipsum dolor sit amet, lorem
                      ipsum dolor sit amet, lorem ipsum dolor sit amet.
                    </div>
                    <Button color="success" size="sm">
                      <HiEye className="-my-px mr-2 size-4" />
                      View more
                    </Button>
                  </>
                }
                color="success"
                icon={HiCheckCircle}
                onDismiss={() => alert("Alert dismissed!")}
                rounded
              >
                <span className="font-medium">Alert heading</span>
              </Alert>
              {/* 
                NOTE: additional/custom/inline TailwindCSS classes
                  - the <h4> and the <p> are custom
              */}
              <div className="py-4">
                <h4 className="text-lg font-semibold text-primary-blue dark:text-[#70B5EF]">
                  Unpaid Approved Invoices
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Browse a list of Flowbite products designed to help you work
                  and play, stay organized, get answers, keep in touch, grow
                  your business, and more.
                </p>
              </div>
              {/* 
                NOTE: additional/custom/inline TailwindCSS classes
                  - the negative offset is custom so that the table is edge-to-edge
              */}
              <div className="-m-4 overflow-x-auto">
                <Table hoverable>
                  <Table.Head>
                    <Table.HeadCell className="p-4">
                      <Checkbox />
                    </Table.HeadCell>
                    <Table.HeadCell>Transaction</Table.HeadCell>
                    <Table.HeadCell>Date & Time</Table.HeadCell>
                    <Table.HeadCell>Amount</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="p-4">
                        <Checkbox />
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white">
                        Payment from <strong>Bonnie Green</strong>
                      </Table.Cell>
                      <Table.Cell>Mar 1, 2021</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>
                        {/* 
                          NOTE: additional/custom/inline TailwindCSS classes
                            - the badges require and additional wrapper to avoid stretching
                        */}
                        <div className="flex flex-wrap gap-2">
                          <Badge color="success">Completed</Badge>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="p-4">
                        <Checkbox />
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white">
                        Payment refund to <strong>#00910</strong>
                      </Table.Cell>
                      <Table.Cell>Apr 23, 2021</Table.Cell>
                      <Table.Cell>-$670</Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                          <Badge color="failure">Cancelled</Badge>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="p-4">
                        <Checkbox />
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white">
                        Payment failed from <strong>#087651</strong>
                      </Table.Cell>
                      <Table.Cell>Apr 24, 2021</Table.Cell>
                      <Table.Cell>$99</Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                          <Badge color="purple">In progress purple</Badge>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="p-4">
                        <Checkbox />
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white">
                        Payment failed from <strong>#087651</strong>
                      </Table.Cell>
                      <Table.Cell>Apr 24, 2021</Table.Cell>
                      <Table.Cell>$99</Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                          <Badge color="pink">In progress pink</Badge>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </Card>
            <Banner>
              {/* 
                NOTE: additional/custom/inline TailwindCSS classes
                  - the banner has slight differences from the official Flowbite React example
              */}
              <div className="relative flex w-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm shadow-sm dark:border-gray-700 dark:bg-gray-800 md:flex-row">
                <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
                  <a
                    href="https://flowbite.com/"
                    className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4"
                  >
                    <img
                      src="https://flowbite.com/docs/images/logo.svg"
                      className="mr-2 h-6"
                      alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white md:pr-6">
                      Flowbite
                    </span>
                  </a>
                  <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    Open example modal here
                  </p>
                </div>
                <div className="flex shrink-0 items-center">
                  <Button
                    onClick={() => setOpenModal(true)}
                    size="sm"
                    color="primary"
                  >
                    <HiQuestionMarkCircle className="-my-px mr-2 size-4" />
                    Open Modal{" "}
                    <HiOutlineArrowRight className="-my-px ml-2 size-4" />
                  </Button>
                  {/* 
                    NOTE: additional/custom/inline TailwindCSS classes
                      - custom collapse button and positioning, slightly different than in Figma
                  */}
                  <Banner.CollapseButton
                    color="gray"
                    className="absolute right-2 top-4 w-8 border-0 bg-transparent text-gray-500 dark:text-gray-400 md:static"
                  >
                    <HiX className="space-4" />
                  </Banner.CollapseButton>
                </div>
              </div>
            </Banner>
            {/* 
              NOTE: additional/custom/inline TailwindCSS classes
                - this is a custom layout, nesting multiple cards next to each other, following the established gap
            */}
            <div className="flex flex-col flex-wrap gap-4 lg:flex-row lg:items-start xl:flex-nowrap">
              {/* 
                NOTE: additional/custom/inline TailwindCSS classes
                  - the min widths and the .grow are custom
              */}
              <Card className="min-w-80 grow lg:min-w-96">
                <form className="flex flex-col gap-4">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Name" />
                    </div>
                    <TextInput
                      id="name"
                      type="text"
                      placeholder="Input text"
                      icon={HiUser}
                      className="grow"
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="occupation" value="Occupation" />
                    </div>
                    <TextInput
                      id="occupation"
                      type="text"
                      placeholder="Input text"
                      className="grow"
                      helperText={
                        <>
                          We’ll never share your details. Read our
                          <a
                            href="#"
                            className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                          >
                            Privacy Policy
                          </a>
                          .
                        </>
                      }
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="salary" value="Label" />
                    </div>
                    <TextInput
                      id="salary"
                      // placeholder="salary"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      addon={
                        <>
                          {/* 
                            NOTE: additional/custom/inline TailwindCSS classes
                              - custom currency dropdown, although the dropdown itself is standard
                          */}
                          <Dropdown
                            label="🇺🇸 USD"
                            dismissOnClick={false}
                            inline
                          >
                            <Dropdown.Item>🇪🇺 EUR</Dropdown.Item>
                            <Dropdown.Item>🇬🇧 GBP</Dropdown.Item>
                            <Dropdown.Item>🇨🇳 CNY</Dropdown.Item>
                            <Dropdown.Item>🇷🇺 RUB</Dropdown.Item>
                          </Dropdown>
                        </>
                      }
                    />
                  </div>
                  <div className="mb-2 block">
                    <RangeSlider
                      id="default-range"
                      min={100}
                      max={1500}
                      step={100}
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                    {/* 
                      NOTE: additional/custom/inline TailwindCSS classes
                        - custom labels below the range slider
                    */}
                    <p className="mt-2 flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Min ($100)</span>
                      <span>$500</span>
                      <span>$1000</span>
                      <span>Max ($1500)</span>
                    </p>
                  </div>
                  <div>
                    {/* 
                      NOTE: additional/custom/inline TailwindCSS classes
                        - custom note for extra info
                    */}
                    <div className="mb-2 flex items-center justify-between">
                      <Label htmlFor="comment" value="Your message" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        A note for extra info
                      </p>
                    </div>
                    <Textarea
                      id="comment"
                      placeholder="Write text here..."
                      required
                      rows={4}
                    />
                  </div>
                  <div>
                    <Button type="submit" size="sm" color="primary">
                      Send message
                    </Button>
                  </div>
                </form>
              </Card>
              <Card className="min-w-80 grow lg:min-w-96">
                <Chart />
              </Card>
              <Card className="grow">
                {/* 
                  NOTE: additional/custom/inline TailwindCSS classes
                    - using the `flush` option to remove the borders, then style the content centrally from src/themes/primeRevenueFlowbiteTheme.js
                */}
                <Accordion flush>
                  <Accordion.Panel>
                    <Accordion.Title>What is Flowbite?</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive
                        components built on top of Tailwind CSS including
                        buttons, dropdowns, modals, navbars, and more.
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to&nbsp;
                        <a
                          href="https://flowbite.com/docs/getting-started/introduction/"
                          className="text-red-600 hover:underline dark:text-red-500"
                        >
                          get started&nbsp;
                        </a>
                        and start developing websites even faster with
                        components on top of Tailwind CSS.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      Is there a Figma file available?
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the
                        Figma software so everything you see in the library has
                        a design equivalent in our Figma file.
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Check out the
                        <a
                          href="https://flowbite.com/figma/"
                          className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Figma design system
                        </a>
                        based on the utility classes from Tailwind CSS and
                        components from Flowbite.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      What are the differences between Flowbite and Tailwind UI?
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from
                        Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is
                        that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of
                        pages.
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite,
                        Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two
                        worlds.
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Learn more about these technologies:
                      </p>
                      <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>
                          <a
                            href="https://flowbite.com/pro/"
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                          >
                            Flowbite Pro
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tailwindui.com/"
                            rel="nofollow"
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                          >
                            Tailwind UI
                          </a>
                        </li>
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </Card>
            </div>

            {/* 
              NOTE: additional/custom/inline TailwindCSS classes
                - example of blog-like textual content, not used
            */}
            {/* <div className="prose max-w-none">
              <h2>Subtitle</h2>
              <h3>Typography test</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                molestie, mi auctor ultricies dignissim, leo tortor hendrerit
                odio, nec gravida neque leo et tellus. Cras venenatis cursus
                ipsum, quis tincidunt turpis vestibulum at. Etiam lectus risus,
                auctor et posuere feugiat, scelerisque eu velit. Mauris et diam
                at tortor semper placerat a a tellus. Nunc non enim venenatis
                lacus dignissim dignissim non vitae elit. Suspendisse tempus
                varius lorem, a malesuada sapien tempus ac. Vestibulum pulvinar
                erat tellus, sit amet vehicula velit varius auctor. Morbi at
                sapien eget quam vehicula hendrerit vel sit amet felis. In sit
                amet purus vitae augue lacinia accumsan. Nam tristique dui leo,
                commodo tempor ipsum eleifend eget.
              </p>
              <p>
                Integer lacinia id urna et varius. Nunc sed pharetra eros. Donec
                lacinia tincidunt est, sit amet sagittis ante bibendum vel. Duis
                egestas. Praesent maximus condimentum accumsan.
              </p>
              <p>
                Nam pulvinar arcu ut magna vestibulum egestas. Nullam interdum
                placerat tortor, vel sagittis ligula commodo quis. Duis ultrices
                lacinia diam ac tincidunt. Aliquam consectetur velit id blandit
                maximus. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Fusce a rhoncus augue. Duis mollis cursus velit a
                egestas.
              </p>
            </div> */}
          </div>
        </main>

        {/* NOTE: modal */}
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Modal Example</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* 
              NOTE: additional/custom/inline TailwindCSS classes
                - dark:text-white is added because in Figma it was an exception
            */}
            <Button
              onClick={() => setOpenModal(false)}
              size="sm"
              color="primary"
              className="dark:text-white"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Flowbite>
    </>
  );
}

export default App;
