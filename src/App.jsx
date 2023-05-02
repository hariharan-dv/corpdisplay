import React, { useState } from 'react';
import { Player } from 'video-react';
import { Menu } from 'primereact/menu';
import './App.css'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import 'video-react/dist/video-react.css';


import src from './data/song.mp4'

import file1 from './data/pdf1.pdf'
import file2 from './data/pdf2.pdf'
import file3 from './data/pdf3.pdf'
import file4 from './data/pdf4.pdf'

function App() {

  const [fileName, setfileName] = useState(file1)

  const items = [
    {
      label: 'Menu',
      icon: '',
      items: [
        {
          label: 'Menu 1',
          icon: 'pi  '
        },
        {
          label: 'Menu 2',
          icon: 'pi  '
        },
        {
          label: 'Menu 3',
          icon: 'pi'
        },
        {
          label: 'Menu 4',
          icon: 'pi'
        }
      ]
    },
    {
      label: 'Documents',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'PDF 1',
          icon: 'pi pi-fw pi-file',
          // originalEvent: () => setfileName(file1)
        },
        {
          label: 'PDF 2',
          icon: 'pi pi-fw pi-file',
          // originalEvent: () => setfileName(file2)
        },
        {
          label: 'PDF 3',
          icon: 'pi pi-fw pi-file',
          // item: () => setfileName(file3)
        },
        {
          label: 'PDF 4',
          icon: 'pi pi-fw pi-file',
          // item: () => setfileName(file4)
        }
      ]
    },
    {
      label: 'Documents',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'PDF 1',
          icon: 'pi pi-fw pi-file',
        },
        {
          label: 'PDF 2',
          icon: 'pi pi-fw pi-file',
        },
        {
          label: 'PDF 3',
          icon: 'pi pi-fw pi-file',
        }
      ]
    },
    {
      label: 'Documents',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'PDF 1',
          icon: 'pi pi-fw pi-file',
        },
        {
          label: 'PDF 2',
          icon: 'pi pi-fw pi-file',
        }
      ]
    },

  ];

  return (
    <div className='main-container' >
      <div className='sidebar' >
        <Menu model={items} />
      </div>
      <div className='pdf-container' >
        <embed src={`${file1}#toolbar=0&zoom='page-width'&navpanes=0&scrollbar=0`} width='100%' height='100%' onContextMenu={() => false} />
      </div>
      <div className='video-container' >
        <Player muted autoPlay loop >
          <source src={src} />
        </Player>
      </div>
    </div >
  );
}

export default App;
