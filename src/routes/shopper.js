import React, { lazy } from 'react'

const Landing = lazy(() => import('../views/shopper/stores'))
const Listings = lazy(() => import('../views/seller/Listings'))
const Orders = lazy(() => import('../views/seller/Orders'))


// Base
const Colors = lazy(() => import('../views/base/theme/colors/Colors'))
const Typography = lazy(() => import('../views/base/theme/typography/Typography'))
const Accordion = lazy(() => import('../views/base/accordion/Accordion'))
const Breadcrumbs = lazy(() => import('../views/base/breadcrumbs/Breadcrumbs'))
const Cards = lazy(() => import('../views/base/cards/Cards'))
const Carousels = lazy(() => import('../views/base/carousels/Carousels'))
const Collapses = lazy(() => import('../views/base/collapses/Collapses'))
const ListGroups = lazy(() => import('../views/base/list-groups/ListGroups'))
const Navs = lazy(() => import('../views/base/navs/Navs'))
const Paginations = lazy(() => import('../views/base/paginations/Paginations'))
const Placeholders = lazy(() => import('../views/base/placeholders/Placeholders'))
const Popovers = lazy(() => import('../views/base/popovers/Popovers'))
const Progress = lazy(() => import('../views/base/progress/Progress'))
const Spinners = lazy(() => import('../views/base/spinners/Spinners'))
const Tables = lazy(() => import('../views/base/tables/Tables'))
const Tooltips = lazy(() => import('../views/base/tooltips/Tooltips'))

// Buttons
const Buttons = lazy(() => import('../views/base/buttons/buttons/Buttons'))
const ButtonGroups = lazy(() => import('../views/base/buttons/button-groups/ButtonGroups'))
const Dropdowns = lazy(() => import('../views/base/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = lazy(() => import('../views/base/forms/checks-radios/ChecksRadios'))
const FloatingLabels = lazy(() => import('../views/base/forms/floating-labels/FloatingLabels'))
const FormControl = lazy(() => import('../views/base/forms/form-control/FormControl'))
const InputGroup = lazy(() => import('../views/base/forms/input-group/InputGroup'))
const Layout = lazy(() => import('../views/base/forms/layout/Layout'))
const Range = lazy(() => import('../views/base/forms/range/Range'))
const Select = lazy(() => import('../views/base/forms/select/Select'))
const Validation = lazy(() => import('../views/base/forms/validation/Validation'))

const Charts = lazy(() => import('../views/base/charts/Charts'))

// Icons
const CoreUIIcons = lazy(() => import('../views/base/icons/coreui-icons/CoreUIIcons'))
const Flags = lazy(() => import('../views/base/icons/flags/Flags'))
const Brands = lazy(() => import('../views/base/icons/brands/Brands'))

// Notifications
const Alerts = lazy(() => import('../views/base/notifications/alerts/Alerts'))
const Badges = lazy(() => import('../views/base/notifications/badges/Badges'))
const Modals = lazy(() => import('../views/base/notifications/modals/Modals'))
const Toasts = lazy(() => import('../views/base/notifications/toasts/Toasts'))

const Widgets = lazy(() => import('../views/base/widgets/Widgets'))
const Page404 = lazy(() => import('../views/base/pages/page404/Page404'))
const Page500 = lazy(() => import('../views/base/pages/page500/Page500'))

const routes = [
  { path: '/stores', exact: true, name: 'Home', element: Landing },
  { path: '/listings', name: 'Listings', element: Listings },
  { path: '/orders', name: 'Orders', element: Orders },


  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '*', name: 'Widgets', element: Page404 },
]

export default routes
