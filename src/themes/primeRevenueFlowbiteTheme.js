/**
 * Custom Flowbite theme configuration for MyCompany.
 * Defines styles for various Flowbite components such as buttons and sidebar.
 * https://flowbite-react.com/docs/customize/theme#option-2-create-a-custom-theme
 *
 * @constant
 * @type {Object}
 * @property {Object} button - Custom styles for https://flowbite-react.com/docs/components/button#theme.
 * @property {Object} sidebar - Custom styles for https://flowbite-react.com/docs/components/sidebar#theme.
 * @property {Object} navbar - Custom styles for https://flowbite-react.com/docs/components/navbar#theme.
 * @property {Object} card - Custom styles for https://flowbite-react.com/docs/components/card#theme.
 * @property {Object} dropdown - Custom styles for https://flowbite-react.com/docs/components/dropdown#theme.
 * @property {Object} textInput - Custom styles for https://flowbite-react.com/docs/components/forms#text-input-theme.
 * @property {Object} modal - Custom styles for https://flowbite-react.com/docs/components/modal#theme.
 * @property {Object} alert - Custom styles for https://flowbite-react.com/docs/components/alert#theme.
 * @property {Object} table - Custom styles for https://flowbite-react.com/docs/components/table#theme.
 * @property {Object} badge - Custom styles for https://flowbite-react.com/docs/components/badge#theme.
 * @property {Object} accordion - Custom styles for https://flowbite-react.com/docs/components/accordion#theme.
 */
const primeRevenueFlowbiteTheme = {
  button: {
    color: {
      primary:
        "border border-transparent bg-accent-blue-one text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-accent-blue-seven dark:bg-blue-[#4AB8EB] dark:text-black dark:hover:bg-accent-blue-seven dark:focus:ring-blue-800",
    },
    size: {
      sm: "px-3 py-2 text-sm leading-none",
    },
  },

  sidebar: {
    root: {
      base: "h-full",
      collapsed: {
        on: "w-16",
        off: "lg:w-sidebar",
      },
      inner:
        "h-full overflow-y-auto overflow-x-hidden rounded bg-sidebar-light pb-4 dark:bg-sidebar-dark",
    },
    collapse: {
      button:
        "group flex w-full items-start rounded-lg p-2 text-base font-normal text-white transition duration-75 hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700",
      icon: {
        base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white shrink-0",
        open: {
          off: "",
          on: "text-white",
        },
      },
      label: {
        base: "ml-3 flex-1 text-left",
        icon: {
          base: "h-6 w-6 transition delay-0 ease-in-out",
          open: {
            on: "rotate-180",
            off: "",
          },
        },
      },
      list: "space-y-2 py-2",
    },
    cta: {
      base: "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
      color: {
        blue: "bg-cyan-50 dark:bg-cyan-900",
        dark: "bg-dark-50 dark:bg-dark-900",
        failure: "bg-red-50 dark:bg-red-900",
        gray: "bg-alternative-50 dark:bg-alternative-900",
        green: "bg-green-50 dark:bg-green-900",
        light: "bg-light-50 dark:bg-light-900",
        red: "bg-red-50 dark:bg-red-900",
        purple: "bg-purple-50 dark:bg-purple-900",
        success: "bg-green-50 dark:bg-green-900",
        yellow: "bg-yellow-50 dark:bg-yellow-900",
        warning: "bg-yellow-50 dark:bg-yellow-900",
      },
    },
    item: {
      base: "group flex items-start justify-center rounded-lg p-2 text-base font-medium text-white hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700",
      active: "bg-gray-100 dark:bg-gray-700",
      collapsed: {
        insideCollapse: "group w-full pl-8 transition duration-75",
        noIcon: "font-bold",
      },
      content: {
        base: "flex-1 px-3",
      },
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white",
        active: "text-gray-700 dark:text-gray-100",
      },
      label: "",
      listItem: "",
    },
    items: {
      base: "",
    },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-[#374151] pt-4 lg:first:mt-0",
      // first:border-t-0 first:pt-0
    },
    logo: {
      base: "mb-5 flex items-center pl-2.5",
      collapsed: {
        on: "hidden",
        off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
      },
      img: "mr-3 h-6 sm:h-7",
    },
  },

  navbar: {
    root: {
      base: "bg-sidebar-light px-2 py-5 dark:border-gray-700 dark:bg-sidebar-dark sm:px-4",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full lg:block lg:w-auto",
      list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:items-center lg:space-x-8 lg:text-base lg:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pl-3 pr-4 lg:p-0 rounded-lg",
      active: {
        on: "bg-gray-700 text-white lg:bg-transparent",
        off: "text-milk-white hover:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:hover:bg-transparent lg:hover:text-cyan-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  },

  card: {
    root: {
      base: "flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",
      children: "flex h-full flex-col justify-center gap-4 p-4",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
      },
    },
  },

  dropdown: {
    arrowIcon: "ml-2 space-4",
    content: "py-1 focus:outline-none",
    floating: {
      animation: "transition-opacity",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {
          dark: "bg-gray-900 dark:bg-gray-700",
          light: "bg-white",
          auto: "bg-white dark:bg-gray-700",
        },
        placement: "-4px",
      },
      base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
      content: "py-1 text-sm text-gray-700 dark:text-gray-200",
      divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
      header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
      hidden: "invisible opacity-0",
      item: {
        container: "",
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
        icon: "mr-2 space-4",
      },
      style: {
        dark: "bg-gray-900 text-white dark:bg-gray-700",
        light: "border border-gray-200 bg-white text-gray-900",
        auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
      },
      target: "w-fit",
    },
    inlineWrapper: "flex items-center whitespace-nowrap",
  },

  textInput: {
    base: "flex",
    addon:
      "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "size-5 text-gray-500 dark:text-gray-400",
      },
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "size-5 text-gray-500 dark:text-gray-400",
      },
      input: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "py-0 min-h-9",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base",
        },
        colors: {
          inverse: "text-gray-400 bg-gray-600 placeholder-gray-400",
        },
      },
    },
  },

  modal: {
    header: {
      base: "flex items-start justify-between rounded-t border-b p-6 dark:border-gray-600",
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600 justify-end",
    },
  },

  alert: {
    closeButton: {
      base: "-m-1.5 ml-auto inline-flex space-8 rounded-lg p-1.5 focus:ring-2",
      icon: "h-5 w-5",
      color: {
        success:
          "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-transparent dark:text-green-400 dark:hover:bg-green-300",
      },
    },
    color: {
      success:
        "border-green-500 bg-green-100 text-green-700 dark:bg-transparent dark:text-green-400 dark:border dark:border-green-900",
    },
  },

  table: {
    "root": {
      "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      "wrapper": "relative"
    },
    "body": {
      "base": "group/body",
      "cell": {
        "base": "p-4 whitespace-nowrap",
      }
    },
    "head": {
      "base": "group/head text-xs uppercase text-gray-500 dark:text-gray-400",
      "cell": {
        "base": "bg-gray-50 p-4 dark:bg-gray-700"
      }
    },
    "row": {
      "base": "group/row",
      "hovered": "hover:bg-gray-50 dark:hover:bg-gray-600",
      "striped": "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
    }
  },

  badge: {
    "root": {
      "base": "flex h-fit items-center gap-1 font-semibold dark:!bg-gray-700 dark:border",
      "color": {
        // TODO: decide whether to leave the defaults and create 'complete/cancelled/in progress' variants
        "failure": "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-400 dark:group-hover:bg-red-300  dark:border-red-400",
        "success": "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-400 dark:group-hover:bg-green-300 dark:border-green-400",
        "purple": "bg-purple-100 text-purple-800 group-hover:bg-purple-200 dark:bg-purple-200 dark:text-purple-500 dark:group-hover:bg-purple-300  dark:border-purple-500",
        "pink": "bg-pink-100 text-pink-800 group-hover:bg-pink-200 dark:bg-pink-200 dark:text-pink-500 dark:group-hover:bg-pink-300 dark:border-pink-500",
      },
    },
  },

  accordion: {
    "root": {
      "base": "-mt-2.5 border-gray-200 dark:border-gray-700",
      "flush": {
        "off": "rounded-lg border",
        "on": ""
      }
    },
    "content": {
      "base": "border border-t-0 p-5 rounded-b-lg dark:bg-gray-900 dark:border-gray-700"
    },
    "title": {
      "arrow": {
        "base": "h-6 w-6 shrink-0",
        "open": {
          "off": "",
          "on": "rotate-180"
        }
      },
      "base": "mt-2.5 flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
      "flush": {
        "off": "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
        "on": "border rounded-lg bg-transparent dark:bg-transparent dark:border-gray-700"
      },
      "heading": "",
      "open": {
        "off": "",
        "on": "rounded-b-none bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
      }
    }
  },
};

export default primeRevenueFlowbiteTheme;
