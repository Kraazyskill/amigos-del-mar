import { Language } from '../translations'

export interface DiveSite {
  name: string
  depth: string
  level: string
  description: string
  marine: string
  season: string
  image: string
}

export function getMahahualDiveSites(language: Language): DiveSite[] {
  if (language === 'es') {
    return [
      {
        name: '40 Cañones',
        depth: '12-25m',
        level: 'Intermedio',
        description: 'Esta es una inmersión en pared con una diferencia, ya que hay múltiples aberturas, o cañones, en el arrecife. Los notarás al descender al comienzo de la inmersión, nadando hacia la sección exterior de la pared. Desde aquí es posible explorar por algunos de los cañones donde residen langostas y morenas junto con peces ángel y peces cofre refugiándose de la corriente. Después de cada apertura explorada, subirás de nuevo y te dirigirás a la pared exterior hasta que aparezca la siguiente. Si miras de cerca verás pequeños camarones y cangrejos también, y tal vez incluso un pez pipa colgando de algún coral de fuego. Es un sitio de buceo extenso con mucho que explorar.',
        marine: 'Rayas águila, tortugas, morenas, peces ángel, peces cofre, langostas, lábridos azules, sábalos, pargos, camarones, cangrejos',
        season: 'Mejor: Todo el año',
        image: '/dive-sites/mahahual/40-canones.jpg',
      },
      {
        name: 'Acuario',
        depth: '8-13m',
        level: 'Principiante',
        description: 'Debido a la poca profundidad y las condiciones fáciles, este sitio de buceo es perfecto para estudiantes y principiantes y el descenso se puede hacer mediante una línea. La pared comienza a unos ocho metros y la arena debajo baja a unos 13 metros. Después de un tiempo, la pared se divide en hermosas secciones de coral. Durante la inmersión, es posible ver rayas águila deslizándose, tortugas buscando una esponja sabrosa para comer, morenas asomando de sus pequeñas casas-cueva y rayas confundiéndose con la arena. En ciertas épocas del año hay cardúmenes de cromis azules, lábridos y barracudas juveniles de cola amarilla. Este sitio es excelente para exploradores que les gusta encontrar las pequeñas cosas, como camarones, langostas escondidas, anguilas bebé y peces juveniles. Perfecto para el curso de discover scuba o open water.',
        marine: 'Rayas águila, tortugas, morenas, rayas, cromis azules, lábridos, barracudas juveniles, camarones, langostas',
        season: 'Mejor: Todo el año',
        image: '/dive-sites/mahahual/Acuario.jpg',
      },
      {
        name: 'Chinchorrito',
        depth: '18-24m',
        level: 'Avanzado',
        description: 'Este sitio es un favorito real tanto para los visitantes de Mahahual como para los profesionales de buceo que trabajan aquí. Se llama Chinchorrito porque se siente un poco como Banco Chinchorro; el paisaje es similar así como la cantidad de vida marina. La profundidad máxima es de 24 metros aunque es posible permanecer tan superficial como 18 metros y aún así disfrutar de la inmersión. El sitio se extiende en una ligera curva, siguiendo la corriente hacia el norte y nadando de una formación de coral a otra donde prosperan tanto corales blandos como duros, incluyendo muchos abanicos y esponjas de barril. El coral diverso atrae numerosos tipos diferentes de peces incluyendo cardúmenes de lábridos azules, meros y barracudas. Avistamientos frecuentes de rayas águila, rayas, morenas manchadas y los tres tipos diferentes de tortugas: verde, carey y caguama.',
        marine: 'Rayas águila, rayas, morenas manchadas, tortugas verde/carey/caguama, lábridos azules, meros, barracudas',
        season: 'Mejor: Todo el año',
        image: '/dive-sites/mahahual/chinchorrito.jpg',
      },
      {
        name: 'Escalones',
        depth: '15-24m (prom 17m)',
        level: 'Intermedio',
        description: 'Ubicado frente al faro, probablemente el sitio de buceo más popular de la pared de arrecife justo frente a Mahahual. Fácil acceso desde el bote hundiéndose hasta 15m donde los cañones forman un hermoso paisaje de estructuras de coral. La profundidad varía de 15 a 24m y básicamente buceamos lentamente en zig-zag entrando y saliendo entre los cañones lo que te da la sensación de flotar como un astronauta en los valles lunares. Escalones viene con una amplia variedad de vida marina: tortugas, rayas águila, sargentos mayores, peces ángel, barracudas, grandes meros y ENORMES morenas verdes. La profundidad promedio de la inmersión es de 17m y no tiene corriente significativa. Solo un rápido viaje en nuestro barco de buceo a menos de 5 minutos de nuestra tienda de buceo, realmente no puede ser mejor.',
        marine: 'Tortugas, rayas águila, sargentos mayores, peces ángel, barracudas, grandes meros, ENORMES morenas verdes',
        season: 'Sin corriente significativa - Condiciones fáciles',
        image: '/dive-sites/mahahual/escalones.jpg',
      },
      {
        name: 'Faro Viejo (Faro Antiguo)',
        depth: '12-15m',
        level: 'Todos los Niveles',
        description: 'Este sitio de buceo es completamente diferente a cualquier otro en el área. Al comenzar el descenso todo parece como una gran área arenosa con algunos corales aquí y allá, pero al bajar al fondo a solo 12-14m comenzaremos la inmersión en un hermoso arrecife de coral con un magnífico saliente de solo un metro de altura más o menos con pequeñas cavernas escondidas por todo el sitio. Esto es suficiente para tener sargentos mayores y peces puerco reuniéndose debajo de los salientes por miles. Literalmente seguimos buceando a lo largo de los salientes y el cardumen de pargos que empujamos frente a nosotros se hace cada vez más grande. La visibilidad debido a corrientes medias a fuertes durante todo el año suele ser de 20-30m. Las corrientes siempre vienen con grandes peces depredadores, un sitio favorito para ver cardúmenes de barracudas, jureles y jureles de caballo, meros negros solitarios y ocasionalmente tiburones nodriza descansando debajo de las grietas del arrecife.',
        marine: 'Miles de pargos sargentos mayores, peces puerco, cardúmenes de barracudas, jureles, jureles de caballo, meros negros, tiburones nodriza',
        season: 'Visibilidad: 20-30m',
        image: '/dive-sites/mahahual/faro-viejo.jpg',
      },
      {
        name: 'La Rampa',
        depth: '15-30m',
        level: 'Avanzado',
        description: 'La pared principal del arrecife se extiende casi 3 km de longitud frente a Mahahual y hay un lugar en particular donde la madre naturaleza nos hizo a los buzos un favor gigantesco. Un enorme dedo de cañón baja de la pared a una profundidad de más de 40m. Con corrientes suaves generalmente, un espectáculo espera a cualquier buzo. Enormes cardúmenes de pargos Cubera masivos se reúnen en números para cazar en las corrientes, algunos de un metro de largo y a menudo confundidos con meros por su tamaño. Comenzamos la inmersión descendiendo la rampa de coral hasta 30m, permanecemos allí unos 3-4 minutos viendo el espectáculo y luego nos abrimos camino hasta 15-18m buceando a través de aberturas en los cañones. La vista desde abajo hacia el arrecife es absolutamente impresionante, la luz del sol juega con diferentes áreas del sistema de arrecifes.',
        marine: 'Enormes pargos Cubera (1m de largo), rayas águila, las 3 tortugas caribeñas, meros negros, cardúmenes de peces cirujano',
        season: 'Corrientes suaves',
        image: '/dive-sites/mahahual/la-rampa.jpg',
      },
      {
        name: 'Los Arcos',
        depth: '10-40m',
        level: 'Avanzado',
        description: 'A unos 9 km al sur de Mahahual, un sitio de buceo profundo con una topografía de arrecife incomparable. Enormes cañones de jardines de coral se elevan desde 40m hasta casi 10m proporcionando un paisaje surrealista. Al comienzo de la inmersión iremos primero a 30m pasando por impresionantes arcos y pasajes. Después nos abriremos camino hasta unos 20m donde seguimos los enormes cañones con una vista espectacular de lo que hay debajo y arriba. Se ven algunas enormes colonias de abanicos de aguas profundas (coral negro) al final de la inmersión, algunas de 2-3m de diámetro, un hallazgo muy raro en el Caribe ya que han sido cosechados y vendidos como souvenir durante muchos años. Un sitio de buceo majestuoso solo para buzos avanzados, con increíble vida marina.',
        marine: 'Cardúmenes de barracudas, tortugas marinas, ocasionalmente tiburones nodriza, peces de arrecife caribeños, colonias de coral negro',
        season: 'Solo buzos avanzados',
        image: '/dive-sites/mahahual/los-arcos.jpg',
      },
      {
        name: 'Puerto Ángel',
        depth: '12-26m',
        level: 'Intermedio',
        description: 'Uno de nuestros sitios ExplorDive, a unos 12 km al sur de Mahahual para aquellos que les gusta aventurarse y explorar las gemas escondidas e intactas del área. Puerto Ángel es la mezcla perfecta de jardines de coral, áreas arenosas y salientes fascinantes que te darán mucho que ver. Con una profundidad de entre 12 y un máximo de 26 metros, puedes estar casi horas y eso te da la oportunidad de ver muchos pelágicos diferentes como barracudas, pargos, tortugas, rayas y langostas. Puerto Ángel es también uno de los lugares favoritos para la caza del pez león.',
        marine: 'Barracudas, pargos, tortugas, rayas, langostas, peces león',
        season: 'Sitio ExplorDive - Gema escondida',
        image: '/dive-sites/mahahual/puerto-angel.jpg',
      },
      {
        name: 'Río Bermejo (El Laberinto)',
        depth: '20-26m',
        level: 'Avanzado',
        description: 'El sitio de buceo disponible más cercano al sur del sistema de arrecifes de Mahahual, a unos 3.5 km del pueblo. El Laberinto es un sitio de buceo emocionante, bajamos a 26m y generalmente permanecemos alrededor de 20m de profundidad durante la inmersión saltando de punta a punta de los cañones hacia el océano abierto. Después de unos 15 minutos en la inmersión obtienes varias opciones y aberturas en el sistema de arrecifes y tienes que hacer tu elección. Un camino en particular te lleva a través de grietas estrechas en los cañones que se abren nuevamente a cimas de arrecife estilo arena con múltiples formas de salida de nuevo que puedes elegir, un hermoso laberinto donde puedes probar tus habilidades de navegación bajo el agua. Los cañones y grietas están llenos de langostas espinosas y caribeñas, rayas águila y rayas del sur moviéndose en el área arenosa debajo y las tortugas marinas nadan como gentiles gigantes.',
        marine: 'Langostas espinosas y caribeñas, rayas águila, rayas del sur, tortugas marinas, peces de arrecife reuniéndose en las cimas de los cañones',
        season: 'Prueba tus habilidades de navegación',
        image: '/dive-sites/mahahual/rio-bermejo.jpg',
      },
    ]
  }

  // English
  return [
    {
      name: '40 Cañones',
      depth: '12-25m',
      level: 'Intermediate',
      description: 'This is a wall dive with a difference as there are multiple openings, or canyons, in the reef. You\'ll notice them when descending at the start of the dive, swimming to the outer section of the wall. From here it\'s possible to explore down some of the canyons where lobsters and moray eels reside along with angel fish and trunk fish sheltering from the current. After each opening explored you\'ll shallow up again and head to the outer wall until the next appears. If you look closely you\'ll spot tiny shrimps and crabs too, and maybe even a pipe fish hanging off some fire coral. It\'s an extensive dive site with a lot to explore, whether you stay on the top of the reef at about 12 metres or venture into the canyons to a maximum depth of around 25 metres.',
      marine: 'Eagle rays, turtles, moray eels, angel fish, trunk fish, lobsters, blue wrasse, tarpon, snapper, shrimps, crabs',
      season: 'Best: All year',
      image: '/dive-sites/mahahual/40-canones.jpg',
    },
    {
      name: 'Acuario',
      depth: '8-13m',
      level: 'Beginner',
      description: 'Due to the shallow depth and easy conditions, this dive site is perfect for students and beginners and the descent can be done via a line. The wall starts at about eight metres and the sand below drops down to about 13 metres. After a while the wall splits into beautiful sections of coral. During the dive, it\'s possible to spot eagle rays gliding past, turtles looking for some tasty sponge to eat, moray eels poking out of their little cave homes and sting rays blending into the sand. At certain times of year there are schools of blue chromis, wrasse and juvenile yellowtail barracuda. This site is great for explorers who like finding the little things, such as shrimps, hiding lobsters, baby eels and juvenile fish. Perfect for discover scuba or open water courses.',
      marine: 'Eagle rays, turtles, moray eels, sting rays, blue chromis, wrasse, juvenile yellowtail barracuda, shrimps, lobsters',
      season: 'Best: All year',
      image: '/dive-sites/mahahual/Acuario.jpg',
    },
    {
      name: 'Chinchorrito',
      depth: '18-24m',
      level: 'Advanced',
      description: 'This site is a real favourite for both visitors to Mahahual as well as the dive professionals that work here. It\'s called Chinchorrito because it feels like a little like Banco Chinchorro; the scenery being similar as well as the amount of marine life. The maximum depth is 24 metres although it\'s possible to stay as shallow as 18 metres and still enjoy the dive. The site stretches in a slight curve, following the current to the north and swimming from one coral formation to another where both soft and hard corals thrive, including many fans and barrel sponges. The diverse coral attracts numerous different types of fish including schools of blue wrasse, groupers, and barracudas, which are often lurking slyly and waiting for the chance to pounce on smaller fish. Frequent sightings of eagle rays, sting rays, spotted morays, and all three different types of turtles: green, hawksbill and loggerhead.',
      marine: 'Eagle rays, sting rays, spotted morays, green/hawksbill/loggerhead turtles, blue wrasse, groupers, barracudas',
      season: 'Best: All year',
      image: '/dive-sites/mahahual/chinchorrito.jpg',
    },
    {
      name: 'Escalones',
      depth: '15-24m (avg 17m)',
      level: 'Intermediate',
      description: 'Located in front of the light house, probably the most popular dive site of the reef wall right in front of Mahahual. Easy access from the boat sinking down to 15m where canyons form a beautiful landscape of coral structures. Depth ranges from 15 to 24m and we basically dive slowly zig-zag in-and-out in between the canyons which gives you the feeling of hovering like an astronaut on the moon valleys. Escalones comes with a broad variety of marine life: turtles, eagle rays, school masters, angel fish, barracuda, big groupers and HUGE green moray eels. Average depth is 17m of the dive and has no significant current. Just a quick zip out on our dive vessel less than 5 minutes from our dive shop, can\'t get better really.',
      marine: 'Turtles, eagle rays, school masters, angel fish, barracuda, big groupers, HUGE green moray eels',
      season: 'No significant current - Easy conditions',
      image: '/dive-sites/mahahual/escalones.jpg',
    },
    {
      name: 'Faro Viejo (Old Lighthouse)',
      depth: '12-15m',
      level: 'All Levels',
      description: 'This dive site is completely different than any other in the area. As we start the descend it all seems like a huge sandy area with some corals here and there but going down to the bottom at only 12-14m we will start the dive at a beautiful coral reef with a magnificent overhang only a meter high or so with small hideout caverns all over the site. This is enough to have school master snappers and pork fish gathering below the overhangs in thousands. We literally keep diving along the overhangs and the school of snappers we push in front of us gets bigger and bigger. Visibility due to all year long medium to strong currents is usually 20-30m. Currents always come with big predatory fish, a favourite site to see schools of barracuda, permits and horse eye jacks, solitary black groupers and occasionally resting nurse sharks below the reef cracks.',
      marine: 'Thousands of school master snappers, pork fish, barracuda schools, permits, horse eye jacks, black groupers, nurse sharks',
      season: 'Visibility: 20-30m',
      image: '/dive-sites/mahahual/faro-viejo.jpg',
    },
    {
      name: 'La Rampa',
      depth: '15-30m',
      level: 'Advanced',
      description: 'The main reef wall stretches almost 3km in length in front of Mahahual and there is one place in particular where mother nature did us divers a gigantic favor. A huge canyon finger goes down from the wall to a depth over more than 40m. With mild currents usually, a spectacle is awaiting any diver. Huge schools of massive Cubera snappers gather in numbers to hunt in the currents, some a meter long and often mistaken for groupers because of their size. We start the dive descending the coral ramp down to 30m, stay there about 3-4 minutes watching the spectacle and then work our way up to 15-18m diving through openings in the canyons. The view from below up the reef is absolutely breath taking, sun light plays with different areas of reef system, giving it another incredible touch.',
      marine: 'Huge Cubera snappers (1m long), eagle rays, all 3 Caribbean sea turtles, black groupers, schools of doctor fish',
      season: 'Mild currents',
      image: '/dive-sites/mahahual/la-rampa.jpg',
    },
    {
      name: 'Los Arcos',
      depth: '10-40m',
      level: 'Advanced',
      description: 'Some 9km south of Mahahual, a deep dive site with a reef topography second to none. Huge canyons of coral gardens build up from 40m to almost 10m providing a surreal scenery. At the beginning of dive we will go deep down first to 30m passing through breath taking arches and passages. Afterwards we will work our way up to about 20m where we follow the huge canyons with a spectacular view of what is beneath and above. Some huge colonies of deep sea fans (black coral) are seen at the end of the dive, some 2-3m in diameter, a very rare finding in the Caribbean as they have been harvested and sold as souvenir for many years. A majestic dive site for the advanced divers only, boasting amazing marine life.',
      marine: 'Schools of barracudas, sea turtles, occasionally nurse sharks, Caribbean reef fish, black coral colonies',
      season: 'Advanced divers only',
      image: '/dive-sites/mahahual/los-arcos.jpg',
    },
    {
      name: 'Puerto Angel',
      depth: '12-26m',
      level: 'Intermediate',
      description: 'One of our ExplorDive sites, some 12km south of Mahahual for the ones who like to adventure and explore the unspoiled hidden gems of area. Puerto Angel is the perfect mix of coral gardens, sandy areas, and fascinating overhangs which will give you so much to look at. With a depth of between 12 and a maximum of 26 meters, you can hang around for almost hours and that gives you the chance of seeing a lot of different pelagics like Barracuda, Snappers, Turtles, Rays and Lobsters. Puerto Angel is also one of the favored spots for the Lionfish hunt.',
      marine: 'Barracuda, snappers, turtles, rays, lobsters, lionfish',
      season: 'ExplorDive site - Hidden gem',
      image: '/dive-sites/mahahual/puerto-angel.jpg',
    },
    {
      name: 'Rio Bermejo (The Labyrinth)',
      depth: '20-26m',
      level: 'Advanced',
      description: 'The closest available dive site further south of Mahahual reef system, some 3.5km away from town. The Labyrinth is an exciting dive site, we go down to 26m and usually stay around 20m depth during the dive jumping from tip to tip of the canyons towards the open ocean. After about 15 minutes into the dive you get several options and openings in the reef system and you gotta make your choice. One way in particular gets you through narrow cracks in the canyons which open up again to arena style reef tops with multiple exit ways again you can choose from, a beautiful labyrinth where you can prove your navigation skills under water. Canyons and cracks are full of spiny and Caribbean lobsters, eagle rays and southern sting rays shuffling in the sandy area below and sea turtles swim by as gentle giants.',
      marine: 'Spiny & Caribbean lobsters, eagle rays, southern sting rays, sea turtles, reef fish gathering at canyon tops',
      season: 'Test your navigation skills',
      image: '/dive-sites/mahahual/rio-bermejo.jpg',
    },
  ]
}

