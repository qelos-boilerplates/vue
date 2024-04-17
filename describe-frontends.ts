import { addMicroFrontend } from '@qelos/plugin-play'
import { NavBarPosition } from '@qelos/plugin-play/dist/micro-frontends';

addMicroFrontend({
  name: 'Demo Plugin UI',
  description: 'Description for the user',
  url: '/entries/index.html',
  roles: ['*'],
  route: {
    name: 'example',
    path: 'example',
    navBarPosition: NavBarPosition.TOP
  }
})