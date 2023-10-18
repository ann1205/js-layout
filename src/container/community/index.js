import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммюніті')

page.append(title)

const COMMUNITY_TABS = [
  {
    title: 'База знань',
    active: false,
  },

  {
    title: 'Інформація',
    active: true,
  },
]

const COMMUNITY_IMAGE = [
  {
    width: 343,
    height: 160,
    src: '/img/community_tg.png',
  },
]

const createCommunityInfo = () => {
  const communityInfo = createElement(
    'main',
    'community__info',
  )

  const tabsList = createElement('ul', 'nav_tabs')

  COMMUNITY_TABS.forEach((tabsData) => {
    const tab = createElement(
      'li',
      tabsData.active
        ? 'tab__title tab-active'
        : 'tab__title',
      tabsData.title,
    )
    tabsList.append(tab)
  })

  communityInfo.append(tabsList)

  const communityDetails = createElement(
    'div',
    'comunity-details',
  )

  COMMUNITY_IMAGE.forEach((params) => {
    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    communityDetails.insertAdjacentElement('beforeend', img)
  })

  const communityHeader = createElement(
    'h2',
    'community__header',
    'Що таке база знань?',
  )

  const communityDescription = createElement(
    'p',
    'community__description',
    'База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.',
  )

  const communityButton = createElement(
    'button',
    'community__button',
    'Перейти до ком`юніті у Телеграм',
  )

  communityDetails.append(
    communityHeader,
    communityDescription,
    communityButton,
  )

  communityInfo.append(communityDetails)

  return communityInfo
}

const communityInfo = createCommunityInfo()

page.append(communityInfo)
