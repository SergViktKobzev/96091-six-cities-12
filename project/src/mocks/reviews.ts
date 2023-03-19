import {Reviews} from '../types/offers';

export const reviews: Reviews[] = [
  {
    id: 1,
    user: {
      id: 10,
      isPro: true,
      name: 'Max',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/1.jpg'
    },
    rating: 2,
    comment: 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    date: '2023-03-04T07:31:24.950Z'
  },
  {
    id: 2,
    user: {
      id: 11,
      isPro: false,
      name: 'Jack',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/2.jpg'
    },
    rating: 4,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2023-03-04T07:31:24.950Z'
  },
  {
    id: 3,
    user: {
      id: 12,
      isPro: true,
      name: 'Mike',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/3.jpg'
    },
    rating: 3,
    comment: 'We really liked it, the house, the view, the location is just super.. Highly recommend',
    date: '2023-03-05T07:21:24.950Z'
  },
  {
    id: 4,
    user: {
      id: 13,
      isPro: false,
      name: 'Jone',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/4.jpg'
    },
    rating: 5,
    comment: 'Fantastic location and atmosphere, beautiful space, really great place to spend a few days',
    date: '2023-03-05T07:11:27.950Z'
  },
];


