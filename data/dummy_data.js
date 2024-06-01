import Category from '../models/category';
import Profile from '../models/profile';

export const CATEGORIES = [
  //Aquí el color del boton, al final
  new Category('tess', 'Tess Miranda', '#FFF000'),
  new Category('alexis', 'Cristian Alexis', '#00FF00'),
  new Category('angel', 'Angel Gabriel', '#4C2882'),
  new Category('pamela', 'Pamela', '#FFFFFF'),
  new Category('angulo', 'Jose Luis', '#850F8D')
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
  //Si necesitas mas colores, no dudes en añadirlos en el arreglo al final de cada perfil

  new Profile(
    '333',
    ['tess'],
    'Salcido Rousseau Tess Miranda',
    require('../assets/tess.jpg'),
    'Hola soy Tess, soy la hija de enmedio de una familia de 5 personas, tengo una hermana mayor y un hermano menor, mi padre se llama Ricardo y Mi madre se llama Judith. Me gusta la música clásica, los videojuegos de aventura, las historias de acción, la música viejita de los 1900s, Las piñas, los patos y hacer arte. Se hablar masomenos Ingles y me interesa aprender a hablar Francés.',
    'Amarillo patito',
    '20 de Junio de 2006',
    
    ['#FFC100', '#FC5404', '#F98404', '#F7FD04', '#FFFF80']
  ),
  new Profile(
    '27',
    ['alexis'],
    'Vergara Mendez Cristian Alexis',
    require('../assets/alexis.jpg'),
    'Soy Cristian Alexis. Pero prefiero que me digan Alexis, tengo 17 años, apunto de cumplir 18, soy un estudiante del CBTis No. 116, yo SI elegí la especialidad de programación porque me gusta programar, desde los 12 años me encanta el desarrollo, tanto de software útil como de videojuegos, ¿qué me gusta?, la pizza, me gustan los videojuegos de acción y aventura, me gusta jugar juegos como; WoT Blitz, TF2, Metal Slug, y he jugado videojuegos de Playstation, y Game Boy, etc. si no estoy viendo videos, estoy jugando videojuegos o desarrollando algún proyecto, sea interactivo, literario, o visual. Cuando se habla de postres no me gusta prácticamente nada, pero cuando se habla de hojaldre allí si me agrada. Estoy aprendiendo Italiano.',
    'Verde Neon(acción turbo)',
    '27 de Junio de 2006',
    ['#686D76', '#9CFF2E', '#32FF6A', '#16FF00', '#C5E898']
  ),
  new Profile(
    'id',
    ['angel'],
    'Hernandez Balaguer Angel Gabriel',
    require('../assets/angel.jpg'),
    'Hola soy Goku no mentira soy Angel, me encantan los videojuegos chidos los que tienen buenos efectos buenos movimientos únicos e increíbles, juegos con mecánicas muy útiles que sean increíbles, me gusta los dibujos bonitos que si están bien dibujados, mi min en el smash ultimate que apenas lo estoy usando en torneos es el pichu, no me gusta estudiar, me gusta hacer lo que quiera, tengo dos mejores amigos increíbles, me gustan las sopas de letras, no me gusta mucho comer sopa, mi laptop es lo que me mantiene cuerdo, mi laptop es la mejor consola que he tenido con ella puedo hacer muchas cosas osea todo en uno osea premio doble y es todo por que casi me excedo de mucho texto.',
    'Violeta',
    '24 Septiembre de 2005',
    ['#6FDCE3', '#5C2FC2', '#C738BD', '#8F00FF', '#FF0000']
  ),
  new Profile(
    '19',
    ['pamela'],
    'De La Cruz Galicia Pamela',
    require('../assets/pamela.jpg'),
    'Hola soy Pamela, tengo 18 años y voy ahorita mismo a la preparatoria cbtis 116. Mi color favorito es el negro y blanco, mi comida favorita es la milanesa y me gusta mucho dibujar en digital, me gusta los gatos gordos y obesos, me gusta los videojuegos de terror, por lo general utilizo mucho la aplicaciones Twitch y Twitter y entiendo muy bien el portugues.',
    'Negro y Blanco',
    '28 de Febrero de 2006',
      
    ['#151515', '#6D5D6E', '#CDE8E5', '#FBF9F1', '#686D76']
  ),
  new Profile(
    '746',
    ['angulo'],
    'Cristerna Angulo Jose Luis',
    require('../assets/angulo.jpg'),
    'Hola soy Jose Luis Cristerna Angulo pero todos me dicen Angulo, tengo 18 años y estoy cursando el 6to semestre en el CBTis 116. Mi color favorito es el morado, mi comida favorita es cualquier tipo de pasta y disfruto mucho de patinar, tengo 2 perros llamados tanke y Doris y mi saga de juegos favoritos es God of War.',
    'Morado',
    '09 de Marzo ',
    //0 fondo  1 nombres   2 cumple   3 colfav  4 texto
    ['#B931FC', '#850F8D', '#E49BFF', '#6420AA', '#F8F9D7' ]
  )

];