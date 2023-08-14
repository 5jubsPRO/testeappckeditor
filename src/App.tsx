import {useState} from 'react';
import './App.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';

const editorConfig = {
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'heading',
        '|',
        'textPartLanguage',
        '|',
        'blockQuote',
        'specialCharacters',
        'insertTable',
        'horizontalLine',
        'imageUpload',
        'imageInsert',
        'pageBreak',
        '|',
        '-',
        'bold',
        'italic',
        'underline',
        '|',
        'alignment',
        'bulletedList',
        'numberedList',
        'outdent',
        'indent',
        '|',
        'fontFamily',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        'highlight',
        '|',
        'link',
        'removeFormat'
      ],
      shouldNotGroupWhenFull: true
    },
    language: 'pt-br',
    image: {
      toolbar: [
        'imageTextAlternative',
        'toggleImageCaption',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties',
        'tableProperties'
      ]
    }
};

function App() {
  const [addTexto, setaValor] = useState('');
  const [textoAdicionado, mostraTexto] = useState(false);

  const alteraTexto = ( event: any , editor: any) => {
    const texto = editor.data.get();
    setaValor(texto);
  }
  const setaFocoNoEditor = (editor: any) => {
    editor.editing.view.focus();
  };
  const carregaTexto = (editor: any = []) => {
    setaValor('<p>Exemplo de Texto Completo!</p>');
  }

  const objComTexto = {__html:addTexto};

  return (
    <div className="App">
      <h1>TESTE do CKEditor</h1>
      <CKEditor
          editor={ Editor }
          config={ editorConfig }
          data={ addTexto }
          onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor pronto para uso!', editor );
              setaFocoNoEditor( editor );
          } }
          onChange={ ( event, editor ) => {
            alteraTexto(event, editor);
            console.log(editor.data.get());
          } }
          onBlur={ ( event, editor ) => {
              console.log( 'Editor desfocado.', editor );
          } }
          onFocus={ ( event, editor ) => {
              console.log( 'Editor Focado.', editor );
          } }
      />
      <div>
      <button
        style={{background: 'black' , color: 'white '}}
        onClick={ ()=> mostraTexto(!textoAdicionado) }
      >
        {textoAdicionado ? 'Esconde Texto' : 'Mostra Texto'}
      </button>
      <button
        style={{background: 'black' , color: 'white '}}
        onClick={ ()=> carregaTexto() }
      >
        Carrega Texto Completo
      </button>
      </div>
      {textoAdicionado ? <div dangerouslySetInnerHTML={objComTexto}/> : ''}

    </div>
  );
}

export default App;
