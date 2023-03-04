// task_1

interface Info {
  price: number, discount: number, isInstallment: boolean, months: number
}
const totalPrice = ({ price, discount, isInstallment, months }: Info): number => {
  if(isInstallment) {
    return ((price / 100 * (100 - discount)) / months )
  }
  return (price / 100 * (100 - discount))
};

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
// 6250


// task_2

/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */

interface Data {
  id: string,
  title: string,
  body: string
}

interface Obj {
    id: string,
    title: string,
    body: string
}

interface ById {
  [key: string]: Obj
}

interface ReturnData {
    byId: ById,
    allIds: string[]

}

const posts: Array<Data> = [
  {
    id: '62e69d5a5458aac0ed320b35',
    title: 'id labore ex et quam laborum',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium'
  },
  {
    id: '62e69d5a5458aac0ed320b1c',
    title: 'quo vero reiciendis velit similique earum',
    body: 'est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et'
  },
  {
    id: '62e69d5a5458aac0ed320b32',
    title: 'odio adipisci rerum aut animi',
    body: 'quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione'
  },
  {
    id: '62e69d5a5458aac0ed320b39',
    title: 'alias odio sit',
    body: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
  },
  {
    id: '62e69d5a5458aac0ed320b53',
    title: 'vero eaque aliquid doloribus et culpa',
    body: 'harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et'
  },
  {
    id: '62e69d5a5458aac0ed320b19',
    title: 'et fugit eligendi deleniti quidem qui sint nihil autem',
    body: 'doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in'
  },
  {
    id: '62e69d5a5458aac0ed320b25',
    title: 'repellat consequatur praesentium vel minus molestias voluptatum',
    body: 'maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor'
  }
];

const normalizeData = (unnormalizedData: Array<Data>): ReturnData => {
  const byId: ById = {};
  const ids: string[] = [];
  unnormalizedData.forEach(item => {
    ids.push(item.id);
    byId[item.id] = item;
  })
  return {byId: byId, allIds: ids};
};

console.log(normalizeData(posts));
/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */


// task_3



const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface PostInfo {
  postId: number, id: number, name: string, email: string, body: string
}

const getData = (url: string): any => {
  return (fetch(url).then( res => res.json()))
}

getData(COMMENTS_URL)
  .then((data: PostInfo[]): void => {
    data.forEach( (item: PostInfo): void => {
      console.log(`ID: ${ item.id }`, `Email: ${ item.email }`);
    })
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */