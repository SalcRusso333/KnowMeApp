import Category from '../models/category';
import Profile from '../models/profile';

export const CATEGORIES = [
  new Category('tess', 'Tess Miranda', '#FFF000'),
  new Category('alexis', 'Cristian Alexis', '#00FF00'),
  new Category('angel', 'Angel Gabriel', '#000000'),
  new Category('pamela', 'Pamela', '#FFFFFF'),
  new Category('angulo', 'Jose Luis', '#000000')
  /*new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'German', '#f5d142'),
  new Category('c5', 'Light & Lovely', '#368dff'),
  new Category('c6', 'Exotic', '#41d95d'),
  new Category('c7', 'Breakfast', '#9eecff'),
  new Category('c8', 'Asian', '#b9ffb0'),
  new Category('c9', 'French', '#ffc7ff'),
  new Category('c10', 'Summer', '#47fced')*/
];

export const PROFILES = [

  new Profile(
    '333',
    ['tess'],
    'Salcido Rousseau Tess Miranda',
    require('../assets/tess.jpg'),
    'Hola soy Tess, soy la hija de enmedio de una familia de 5 personas, tengo una hermana mayor y un hermano menor, mi padre se llama Ricardo y Mi madre se llama Judith. Me gusta la música clásica, los videojuegos de aventura, las historias de acción, la música viejita de los 1900s, Las piñas, los patos y hacer arte. Se hablar masomenos Ingles y me interesa aprender a hablar Francés.',
    'Amarillo patito',
    '20 de Junio de 2006'
  ),
  new Profile(
    '27',
    ['alexis'],
    'Vergara Mendez Cristian Alexis',
    require('../assets/alexis.jpg'),
    'Soy Cristian Alexis. Pero prefiero que me digan Alexis, tengo 17 años, apunto de cumplir 18, soy un estudiante del CBTis No. 116, yo SI elegí la especialidad de programación porque me gusta programar, desde los 12 años me encanta el desarrollo, tanto de software útil como de videojuegos, ¿qué me gusta?, la pizza, me gustan los videojuegos de acción y aventura, me gusta jugar juegos como; WoT Blitz, TF2, Metal Slug, y he jugado videojuegos de Playstation, y Game Boy, etc. si no estoy viendo videos, estoy jugando videojuegos o desarrollando algún proyecto, sea interactivo, literario, o visual. Cuando se habla de postres no me gusta prácticamente nada, pero cuando se habla de hojaldre allí si me agrada. Estoy aprendiendo Italiano.',
    'Verde Neon(acción turbo)',
    '27 de Junio de 2006'
  ),
  new Profile(
    'id',
    ['angel'],
    'Hernandez Balaguer Angel Gabriel',
    'image',
    'Biografia',
    'Ajá'
  ),
  new Profile(
    'id',
    ['pamela'],
    'De La Cruz Galicia Pamela',
    require('../assets/pamela.jpg'),
    'Hola soy Pamela, tengo 18 años y voy ahorita mismo a la preparatoria cbtis 116. Mi color favorito es el negro y blanco, mi comida favorita es la milanesa y me gusta mucho dibujar en digital, me gusta los gatos gordos y obesos, me gusta los videojuegos de terror, por lo general utilizo mucho la aplicaciones Twitch y Twitter y entiendo muy bien el portugues.',
    'Negro y Blanco',
    '28 de Febrero de 2006'
  ),
  new Profile(
    'id',
    ['angulo'],
    'Cristerna Angulo Jose Luis',
    'image',
    'Biografia',
    'Ajá'
  )

];