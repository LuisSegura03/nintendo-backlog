// Datos del backlog. Notas de Metacritic consultadas el 26/11/2026 (versión Nintendo Switch).
// scoreSource: "switch" = metascore propio de Switch; "general" = Switch sin metascore, se usa el general;
//   "coleccion" = nota de la colección de Switch que lo incluye; "none" = sin nota.
// comprado: null = está en tus tarjetas de juego virtuales pero no en el historial de compras.
// reviews = nº de reseñas de críticos de la versión Switch.
// cover = icono oficial de la eShop de Nintendo (Metro Redux usa el de Metro 2033 Redux; el pack no tiene uno propio).
// horas = duración aproximada de la historia principal (+ algo de extras). null = juego sin final (online / competitivo).
window.GAMES = [
  {
    id: "celeste", title: "Celeste", cover: "box/celeste.jpg", year: 2018,
    score: 92, scoreSource: "switch", reviews: 36, generalScore: 92,
    genre: "Plataformas", horas: 12, comprado: "2025-08-26", slug: "celeste",
    desc: "Plataformas 2D de precisión en el que Madeline escala la montaña Celeste mientras lidia con su ansiedad. Cada pantalla es un pequeño puzle de saltos, dashes y reflejos.",
    pros: ["Control milimétrico: cada muerte es culpa tuya, nunca del juego", "Historia sobre la salud mental contada con mucha sensibilidad", "Banda sonora de Lena Raine espectacular", "Modo asistencia para ajustar la dificultad sin vergüenza", "Muchísimo contenido extra (lados B y C, fresas, capítulo 9)"],
    cons: ["Los extras postgame son extremadamente exigentes", "Puede frustrar si no te gustan los plataformas de ensayo y error", "Estilo pixel art que no a todos convence"]
  },
  {
    id: "ori", title: "Ori and the Blind Forest: Definitive Edition", cover: "box/ori.jpg", year: 2019,
    score: 90, scoreSource: "switch", reviews: 20, generalScore: 88,
    genre: "Metroidvania", horas: 10, comprado: "2025-06-26", slug: "ori-and-the-blind-forest-definitive-edition",
    desc: "Metroidvania de Moon Studios en el que guías a Ori, un espíritu del bosque, para devolver la luz a Nibel. Conocido por su arte pintado a mano y un arranque que hace llorar a cualquiera.",
    pros: ["Visualmente precioso, de los juegos más bonitos de Switch", "Banda sonora orquestal emotiva", "Movimiento muy fluido y satisfactorio", "El port a Switch corre a 60 fps sólido", "Duración ajustada, ideal para terminarlo"],
    cons: ["Las secuencias de huida exigen memorizar y pueden frustrar", "El combate es simple comparado con su secuela", "Pocos jefes tradicionales"]
  },
  {
    id: "nier", title: "NieR:Automata The End of YoRHa Edition", cover: "box/nier-automata.jpg", year: 2022,
    score: 89, scoreSource: "switch", reviews: 34, generalScore: 89,
    genre: "Acción RPG", horas: 35, comprado: "2026-07-12", slug: "nier-automata-the-end-of-yorha-edition",
    desc: "RPG de acción de PlatinumGames y Yoko Taro. Las androides 2B y 9S luchan contra máquinas en una Tierra abandonada, en una historia que se revela a través de múltiples partidas y finales.",
    pros: ["Una de las historias más memorables del medio, con temas filosóficos", "Combate ágil y vistoso firmado por Platinum", "Banda sonora legendaria de Keiichi Okabe", "Port a Switch sorprendentemente sólido e incluye todo el DLC", "Mezcla de géneros (shoot'em up, plataformas, mundo abierto)"],
    cons: ["Hay que 'rejugar' para ver la historia completa; la ruta B se siente repetitiva", "Mundo abierto algo vacío y con texturas pobres", "Resolución baja en modo portátil", "Las misiones secundarias son en gran parte recados"]
  },
  {
    id: "mhrise", title: "Monster Hunter Rise + Sunbreak", cover: "box/monster-hunter-rise.jpg", year: 2021,
    score: 88, scoreSource: "switch", reviews: 122, generalScore: 88, extraScore: "Sunbreak (expansión): 85",
    genre: "Acción RPG", horas: 80, comprado: "2026-07-28", slug: "monster-hunter-rise",
    desc: "Cazas monstruos gigantes, fabricas equipo con sus materiales y vas a por presas más grandes. Rise agiliza la fórmula con el cordóptero y los Canyne; Sunbreak añade un rango maestro enorme.",
    pros: ["El Monster Hunter más accesible para empezar", "Combate profundo con 14 tipos de arma", "El cordóptero y los Canyne hacen el movimiento muy ágil", "Sunbreak añade cientos de horas de contenido de calidad", "Multijugador online y local muy divertido"],
    cons: ["Muy 'grindero': repetir cacerías para conseguir materiales", "La historia es mínima", "Los ataques Rampage del juego base son flojos", "Curva de aprendizaje inicial con muchos menús y sistemas"]
  },
  {
    id: "stardew", title: "Stardew Valley", cover: "box/stardew-valley.jpg", year: 2017,
    score: 87, scoreSource: "switch", reviews: 14, generalScore: 89,
    genre: "Simulación / Granja", horas: 90, comprado: "2026-09-30", slug: "stardew-valley",
    desc: "Heredas la granja de tu abuelo en Pueblo Pelícano. Cultiva, cría animales, pesca, explora minas y haz amistad (o romance) con los vecinos a tu ritmo.",
    pros: ["Increíblemente relajante y adictivo ('un día más')", "Enorme cantidad de contenido gratis acumulado por actualizaciones", "Cooperativo hasta 4 jugadores", "Personajes con historias entrañables", "Perfecto para sesiones cortas en portátil"],
    cons: ["No tiene un final claro: puede consumir cientos de horas", "El inventario y algunos menús son incómodos con mando", "La pesca es difícil al principio", "Los primeros días son algo lentos"]
  },
  {
    id: "dbfz", title: "DRAGON BALL FighterZ", cover: "box/dragon-ball-fighterz.jpg", year: 2018,
    score: 87, scoreSource: "switch", reviews: 24, generalScore: 87,
    genre: "Lucha", horas: 15, comprado: "2025-06-27", slug: "dragon-ball-fighterz",
    desc: "Juego de lucha 3 contra 3 de Arc System Works que parece el anime en movimiento. Combos espectaculares, supers cinemáticos y un sistema fácil de aprender pero profundo.",
    pros: ["El juego de Dragon Ball más fiel visualmente al anime", "Controles 'autocombo' accesibles para novatos", "Gran profundidad para el juego competitivo", "Recreaciones de momentos icónicos de la serie", "Multijugador local en Switch con Joy-Con"],
    cons: ["El modo historia es largo, repetitivo y poco desafiante", "Muchos personajes están detrás de DLC de pago", "Online en Switch con menos jugadores que en otras plataformas", "Ligera bajada de resolución en portátil"]
  },
  {
    id: "rocketleague", title: "Rocket League", cover: "box/rocket-league.jpg", year: 2017,
    score: 86, scoreSource: "switch", reviews: 32, generalScore: 85,
    genre: "Deportes / Online", horas: null, comprado: "2025-06-07", slug: "rocket-league",
    desc: "Fútbol con coches propulsados por cohetes. Partidas rápidas de 5 minutos, competitivo online, temporadas y personalización de vehículos.",
    pros: ["Idea simple y muy divertida", "Techo de habilidad altísimo (aéreos, mecánicas avanzadas)", "Partidas cortas ideales para ratos libres", "Crossplay con todas las plataformas", "Ahora es free-to-play: mucha gente jugando"],
    cons: ["En Switch se ve y rinde peor que en otras consolas", "La curva competitiva puede frustrar", "Tienda y pase de temporada muy enfocados en microtransacciones", "No tiene 'final': no cuenta realmente como backlog"]
  },
  {
    id: "ninokuni", title: "Ni no Kuni: Wrath of the White Witch", cover: "box/ni-no-kuni.jpg", year: 2019,
    score: 84, scoreSource: "switch", reviews: 23, generalScore: 85,
    genre: "JRPG", horas: 55, comprado: "2026-10-10", slug: "ni-no-kuni-wrath-of-the-white-witch",
    desc: "JRPG de Level-5 con animación del Studio Ghibli. Oliver, un niño que ha perdido a su madre, viaja a un mundo paralelo para salvarla, acompañado de familiares que capturas y entrenas.",
    pros: ["Estética Ghibli y música de Joe Hisaishi preciosas", "Historia tierna y mundo encantador", "Captura y evolución de familiares estilo Pokémon", "Un JRPG clásico muy completo y largo"],
    cons: ["Combate algo torpe y con IA aliada mejorable", "Ritmo lento y mucho 'farmeo' en algunos tramos", "Misiones secundarias repetitivas (recoger 'pedazos de corazón')", "Muchísimos diálogos y tutoriales al principio"]
  },
  {
    id: "hogwarts", title: "Hogwarts Legacy", cover: "box/hogwarts-legacy.jpg", year: 2023,
    score: 84, scoreSource: "general", reviews: 2, generalScore: 84, switchNote: "La versión de Switch solo tiene 2 reseñas (70 y 50); el 84 es el metascore general.",
    genre: "Acción RPG / Mundo abierto", horas: 35, comprado: "2025-08-14", slug: "hogwarts-legacy",
    desc: "RPG de acción en el mundo mágico de Harry Potter, ambientado en el siglo XIX. Eres un estudiante de quinto curso con una magia antigua y exploras Hogwarts, Hogsmeade y las Tierras Altas.",
    pros: ["Recreación de Hogwarts espectacular para fans", "Combate mágico con combos de hechizos divertido", "Volar en escoba y explorar es muy satisfactorio", "Mucho contenido: casas, bestias, sala de los menesteres"],
    cons: ["El port de Switch es el más débil: resolución baja, popping y cargas largas", "Mundo abierto con tareas repetitivas (pruebas de Merlín, cofres)", "Historia principal y villano poco memorables", "Pocas decisiones con consecuencias reales"]
  },
  {
    id: "gris", title: "GRIS", cover: "box/gris.jpg", year: 2018,
    score: 83, scoreSource: "switch", reviews: 43, generalScore: 83,
    genre: "Plataformas / Narrativo", horas: 4, comprado: "2025-09-03", slug: "gris",
    desc: "Aventura de plataformas de Nomada Studio sobre el duelo. Una joven recupera los colores de su mundo en un viaje casi sin palabras, con estética de acuarela.",
    pros: ["Arte de acuarela impresionante, cada escena es un cuadro", "Banda sonora de Berlinist preciosa", "Experiencia emotiva y sin frustración (no se puede morir)", "Muy corto: perfecto para terminar en una tarde"],
    cons: ["Jugabilidad muy sencilla, sin reto", "Puede parecer más 'experiencia' que juego", "Poca rejugabilidad aparte de los coleccionables"]
  },
  {
    id: "tetris99", title: "Tetris 99", cover: "box/tetris-99.jpg", year: 2019,
    score: 83, scoreSource: "switch", reviews: 27, generalScore: 83,
    genre: "Puzle / Battle royale", horas: null, comprado: "2025-06-25", slug: "tetris-99",
    desc: "Tetris convertido en battle royale: 99 jugadores a la vez, y cada línea que eliminas envía basura a los rivales. El último en pie gana.",
    pros: ["Idea genial y adictiva", "Partidas rápidas", "Sistema de ataques con estrategia (a quién apuntar)", "Eventos temáticos con fondos de juegos Nintendo"],
    cons: ["Requiere Nintendo Switch Online para jugar", "Contenido offline muy limitado (pack de pago)", "En niveles altos los rivales son durísimos", "Sin final: no es backlog propiamente"]
  },
  {
    id: "fzero99", title: "F-ZERO 99", cover: "box/f-zero-99.jpg", year: 2023,
    score: 82, scoreSource: "switch", reviews: 9, generalScore: 82,
    genre: "Carreras / Battle royale", horas: null, comprado: "2025-06-24", slug: "f-zero-99",
    desc: "Carreras futuristas de F-Zero (estilo SNES) con 99 pilotos a la vez. Usa el turbo, los 'Skyway' y elimina rivales para llegar primero.",
    pros: ["Velocidad y caos muy divertidos", "Vuelta de F-Zero tras muchos años", "Gratis con Nintendo Switch Online", "Partidas cortas y modos de Grand Prix"],
    cons: ["Requiere Nintendo Switch Online", "Pocas pistas y vehículos", "Estética retro 16-bit que puede quedarse corta", "Sin modo historia ni final"]
  },
  {
    id: "metro", title: "Metro Redux", cover: "box/metro-redux.jpg", year: 2020,
    score: 80, scoreSource: "switch", reviews: 27, generalScore: 83,
    genre: "Shooter / Survival horror", horas: 25, comprado: "2026-02-26", slug: "metro-redux",
    desc: "Recopilación de Metro 2033 y Metro: Last Light. Shooter en primera persona en el metro de Moscú tras un apocalipsis nuclear, con mucha atmósfera y tensión.",
    pros: ["Dos juegos completos por el precio de uno", "Atmósfera opresiva y ambientación excelentes", "Port a Switch muy bien optimizado", "Modos 'Survival' y 'Spartan' para elegir el tipo de experiencia"],
    cons: ["Las armas se sienten algo toscas", "IA enemiga irregular", "Muy lineal y con picos de dificultad", "Gráficos reducidos respecto a otras plataformas"]
  },
  {
    id: "grid", title: "GRID Autosport", cover: "box/grid-autosport.jpg", year: 2019,
    score: 79, scoreSource: "switch", reviews: 14, generalScore: 75,
    genre: "Carreras", horas: 25, comprado: "2026-04-26", slug: "grid-autosport",
    desc: "Juego de carreras de Codemasters entre arcade y simulación, con turismo, monoplazas, resistencia, tuning y street racing. Incluye el pack de texturas de alta resolución que compraste.",
    pros: ["Uno de los mejores juegos de carreras de Switch", "Muchas disciplinas y una carrera larga", "Muy configurable (asistencias, gráficos)", "Rinde muy bien en Switch"],
    cons: ["Sin multijugador online", "Interfaz y menús anticuados", "Las texturas HD son un extra de pago aparte", "Poca personalidad comparado con juegos más modernos"]
  },
  {
    id: "crash", title: "Crash Bandicoot N. Sane Trilogy", cover: "box/crash-n-sane.jpg", year: 2018,
    score: 78, scoreSource: "switch", reviews: 40, generalScore: 80,
    genre: "Plataformas", horas: 20, comprado: "2026-06-25", slug: "crash-bandicoot-n-sane-trilogy",
    desc: "Remake de los tres primeros Crash Bandicoot de PlayStation, rehechos desde cero con gráficos modernos pero fieles al original.",
    pros: ["Tres juegos clásicos en uno", "Remake muy fiel y con mucho cariño", "Puedes jugar con Coco en todos los juegos", "Gran dosis de nostalgia"],
    cons: ["El primer juego es muy difícil y algo injusto (puentes, saltos)", "Colisiones de los saltos distintas al original", "Algo de pérdida visual y de framerate en Switch", "Diseño de niveles anticuado en algunos tramos"]
  },
  {
    id: "wavetale", title: "Wavetale", cover: "box/wavetale.jpg", year: 2022,
    score: 78, scoreSource: "switch", reviews: 6, generalScore: 76,
    genre: "Aventura", horas: 7, comprado: "2026-11-05", slug: "wavetale",
    desc: "Aventura de Thunderful en la que Sigrid surfea sobre el mar para salvar un archipiélago sumergido por la Penumbra. Exploración relajada con un tono muy cálido.",
    pros: ["Deslizarse por el agua es muy agradable", "Estilo artístico colorido y encantador", "Historia sencilla pero con personajes entrañables", "Corto: ideal para terminarlo rápido"],
    cons: ["Combate muy básico", "Algunas misiones de recadero", "Poca dificultad", "Pocas reseñas de la versión Switch (6)"]
  },
  {
    id: "pedro", title: "My Friend Pedro", cover: "box/my-friend-pedro.jpg", year: 2019,
    score: 78, scoreSource: "switch", reviews: 49, generalScore: 78,
    genre: "Acción 2D", horas: 5, comprado: "2026-08-27", slug: "my-friend-pedro",
    desc: "Ballet de balas en 2D: tiroteos a cámara lenta, apuntado dividido entre dos objetivos, piruetas y patadas a sartenes, guiado por un plátano que habla.",
    pros: ["Acción estilosa tipo 'John Woo' muy divertida", "Sistema de apuntado dual original", "Humor absurdo", "Corto e intenso, fácil de terminar"],
    cons: ["Se vuelve repetitivo hacia el final", "Algunas secciones de plataformas flojas", "Control exigente con mando", "Historia sin mucho peso"]
  },
  {
    id: "fc26", title: "EA SPORTS FC 26", cover: "box/ea-fc-26.jpg", year: 2025,
    score: 77, scoreSource: "general", reviews: 1, generalScore: 77, switchNote: "La versión de Switch tiene una sola reseña (85); el 77 es el metascore general.",
    genre: "Deportes / Fútbol", horas: null, comprado: "2026-01-05", slug: "ea-sports-fc-26",
    desc: "El simulador de fútbol de EA con licencias de ligas, Ultimate Team, modo Carrera y Clubs. Compraste también la narración en español.",
    pros: ["Licencias oficiales de ligas y jugadores", "Modo Carrera para jugar offline", "Narración en español (comprada aparte)", "Ideal para partidos rápidos con amigos"],
    cons: ["La versión de Switch suele ser inferior técnicamente", "Ultimate Team muy orientado a microtransacciones", "Pocas novedades año tras año", "Sin final: no es un juego de backlog clásico"]
  },
  {
    id: "ezio", title: "Assassin's Creed: The Ezio Collection", cover: "box/ac-ezio.jpg", year: 2022,
    score: 75, scoreSource: "switch", reviews: 25, generalScore: 72,
    genre: "Acción / Aventura", horas: 70, comprado: "2025-12-24", slug: "assassins-creed-the-ezio-collection",
    desc: "Assassin's Creed II, Brotherhood y Revelations: la trilogía completa de Ezio Auditore, desde la Florencia del Renacimiento hasta Constantinopla. Tienes el pack de audio en español.",
    pros: ["Tres de los mejores Assassin's Creed en uno", "Ezio es el protagonista más carismático de la saga", "Ciudades renacentistas preciosas para explorar", "Incluye todos los DLC; ideal para portátil"],
    cons: ["Controles y combate anticuados", "Misiones de seguimiento y escolta tediosas", "El pack de idioma en español va aparte y ocupa espacio", "Rendimiento y resolución justos en Switch"]
  },
  {
    id: "nfs", title: "Need for Speed Hot Pursuit Remastered", cover: "box/nfs-hot-pursuit.jpg", year: 2020,
    score: 74, scoreSource: "switch", reviews: 9, generalScore: 75,
    genre: "Carreras arcade", horas: 12, comprado: "2025-11-26", slug: "need-for-speed-hot-pursuit-remastered",
    desc: "Remaster del NFS de Criterion de 2010: persecuciones entre policías y corredores por Seacrest County con coches de lujo, choques y gadgets.",
    pros: ["Persecuciones policía vs. corredor muy emocionantes", "Puedes jugar como policía o como corredor", "Autolog para competir con los tiempos de amigos", "Arcade puro, directo y divertido"],
    cons: ["Remaster muy conservador, pocas mejoras", "30 fps en Switch", "Contenido repetitivo pasado un tiempo", "Sin personalización de coches"]
  },
  {
    id: "tsubasa", title: "Captain Tsubasa: Rise of New Champions", cover: "box/captain-tsubasa.jpg", year: 2020,
    score: 71, scoreSource: "switch", reviews: 13, generalScore: 69,
    genre: "Deportes / Fútbol arcade", horas: 15, comprado: "2026-09-16", slug: "captain-tsubasa-rise-of-new-champions",
    desc: "Fútbol arcade basado en Oliver y Benji (Captain Tsubasa). Tiros especiales espectaculares, regates y un modo historia que recrea el anime y crea tu propio jugador.",
    pros: ["Muy fiel al anime, ideal si eres fan", "Supertiros y animaciones espectaculares", "Modo historia doble (Tsubasa y personaje propio)", "Divertido en partidas locales"],
    cons: ["Jugabilidad poco profunda: se vuelve repetitiva", "Muchísimos diálogos y escenas que cortan el ritmo", "Rendimiento algo justo en Switch", "Poco contenido una vez terminada la historia"]
  },
  {
    id: "champions", title: "Pokémon Champions", cover: "box/pokemon-champions.jpg", year: 2026,
    score: 67, scoreSource: "switch", reviews: 31, generalScore: 67,
    genre: "Estrategia / Combates Pokémon", horas: null, comprado: "2026-04-09", slug: "pokemon-champions",
    desc: "Juego centrado exclusivamente en los combates Pokémon, pensado para el competitivo (formato VGC) y conectado con Pokémon HOME para traer tus Pokémon.",
    pros: ["Forma más cómoda de jugar combates competitivos", "Integración con Pokémon HOME", "Combates rápidos sin necesidad de entrenar durante horas", "Base para torneos oficiales"],
    cons: ["Contenido muy limitado fuera del combate", "Poco atractivo si no te interesa el competitivo", "Monetización y desbloqueos criticados", "Sin aventura ni historia de verdad"]
  },
  {
    id: "pacman", title: "PAC-MAN WORLD Re-PAC", cover: "box/pac-man-world.jpg", year: 2022,
    score: 65, scoreSource: "switch", reviews: 15, generalScore: 71,
    genre: "Plataformas 3D", horas: 8, comprado: "2025-10-28", slug: "pac-man-world-re-pac",
    desc: "Remake del plataformas 3D de PlayStation de 1999 en el que Pac-Man rescata a su familia de los fantasmas en la isla de los Fantasmas.",
    pros: ["Remake fiel con gráficos renovados", "Niveles cortos y variados", "Incluye el laberinto clásico de Pac-Man", "Nostalgia de la era PS1"],
    cons: ["Diseño de niveles anticuado", "Rendimiento inferior en Switch frente a otras plataformas", "Cámara a veces problemática", "Poco desafío y poca profundidad"]
  },
  {
    id: "aotennis", title: "AO Tennis 2", cover: "box/ao-tennis-2.jpg", year: 2020,
    score: 64, scoreSource: "switch", reviews: 7, generalScore: 69,
    genre: "Deportes / Tenis", horas: null, comprado: "2026-06-08", slug: "ao-tennis-2",
    desc: "Simulador de tenis oficial del Open de Australia con modo carrera, editor de jugadores y estadios, y jugadores reales con licencia.",
    pros: ["Modo carrera con decisiones y rivalidades", "Editor muy completo", "Jugadores y torneo reales con licencia", "Más simulación que otros juegos de tenis en Switch"],
    cons: ["Gráficos muy rebajados en Switch", "Controles poco precisos y animaciones rígidas", "Plantilla de tenistas reales escasa", "Online con pocos jugadores"]
  },
  {
    id: "alanwake", title: "Alan Wake Remastered", cover: "box/alan-wake.jpg", year: 2022,
    score: 58, scoreSource: "switch", reviews: 4, generalScore: 79, switchNote: "Solo 4 reseñas de Switch; el metascore general es 79.",
    genre: "Thriller / Survival horror", horas: 14, comprado: "2025-07-03", slug: "alan-wake-remastered",
    desc: "Thriller psicológico de Remedy. El escritor Alan Wake busca a su esposa desaparecida en Bright Falls y combate a los Poseídos con linterna y pistola mientras su novela se hace realidad.",
    pros: ["Atmósfera de serie de TV estilo Twin Peaks", "Mecánica de luz y sombra original", "Incluye las dos expansiones", "Narrativa por episodios muy enganchante"],
    cons: ["El port de Switch tiene recortes técnicos notables (por eso la nota baja)", "Combate repetitivo", "Mucho bosque nocturno parecido entre sí", "Pocas reseñas de Switch: nota poco representativa"]
  },
  // ---- Juegos que están en tus tarjetas de juego virtuales pero no en el historial de compras
  //      (gratuitos, canjeados con código o comprados antes de lo que muestra el historial) ----
  {
    id: "portal", title: "Portal", cover: "box/portal.jpg", year: 2022,
    score: 95, scoreSource: "coleccion", reviews: 10, generalScore: 95, switchNote: "Nota de Portal: Companion Collection en Switch (Portal + Portal 2).",
    genre: "Puzle", horas: 4, comprado: null, slug: "portal-companion-collection",
    desc: "Clásico de Valve: con la pistola de portales recorres las cámaras de prueba de Aperture Science mientras GLaDOS, una IA con un humor muy negro, te 'anima' a seguir.",
    pros: ["Mecánica de portales genial y muy original", "GLaDOS es de los mejores villanos de los videojuegos", "Corto y sin relleno", "El port de Switch es excelente"],
    cons: ["Se termina en una tarde", "Al ser de 2007, visualmente se nota su edad", "Poco contenido más allá de la historia y los retos"]
  },
  {
    id: "portal2", title: "Portal 2", cover: "box/portal-2.jpg", year: 2022,
    score: 95, scoreSource: "coleccion", reviews: 10, generalScore: 95, switchNote: "Nota de Portal: Companion Collection en Switch (Portal + Portal 2).",
    genre: "Puzle", horas: 10, comprado: null, slug: "portal-companion-collection",
    desc: "Secuela mucho más ambiciosa: más mecánicas (geles, puentes de luz, rayos de tracción), una historia con Wheatley y GLaDOS, y una campaña cooperativa aparte.",
    pros: ["Considerado uno de los mejores juegos de puzles de la historia", "Guion y humor brillantes (Wheatley, Cave Johnson)", "Campaña cooperativa para dos, en pantalla dividida u online", "Puzles muy ingeniosos y bien dosificados"],
    cons: ["Algunos puzles de la parte final son más largos que difíciles", "Cargas frecuentes entre zonas", "Conviene jugar antes el primero"]
  },
  {
    id: "hades", title: "Hades", cover: "box/hades.jpg", year: 2020,
    score: 93, scoreSource: "switch", reviews: 48, generalScore: 93,
    genre: "Roguelike / Acción", horas: 25, comprado: null, slug: "hades",
    desc: "Roguelike de Supergiant en el que Zagreo, hijo de Hades, intenta escapar del inframundo. Cada intento es distinto gracias a las bendiciones de los dioses del Olimpo.",
    pros: ["Combate rapidísimo y muy satisfactorio", "Cada muerte avanza la historia: nunca sientes que pierdes el tiempo", "Personajes, doblaje y arte excelentes", "Muchísima variedad de armas y combinaciones", "Perfecto en portátil para partidas cortas"],
    cons: ["La estructura repetitiva de roguelike no gusta a todos", "Ver el final real requiere muchas escapadas", "Puede ser difícil al principio (hay modo Dios para suavizarlo)"]
  },
  {
    id: "inside", title: "INSIDE", cover: "box/inside.jpg", year: 2018,
    score: 91, scoreSource: "switch", reviews: 30, generalScore: 93,
    genre: "Plataformas / Puzle", horas: 4, comprado: null, slug: "inside",
    desc: "De los creadores de LIMBO. Un niño huye de guardias y perros por un mundo distópico e inquietante, resolviendo puzles ambientales sin una sola palabra.",
    pros: ["Atmósfera y dirección artística sobresalientes", "Animaciones muy cuidadas", "Puzles inteligentes que nunca se atascan demasiado", "Final de los más comentados de los indies"],
    cons: ["Muy corto", "Poca rejugabilidad aparte del final secreto", "Algunas muertes por ensayo y error"]
  },
  {
    id: "walkingdead", title: "The Walking Dead (Telltale)", cover: "box/walking-dead.jpg", year: 2018,
    score: 89, scoreSource: "general", reviews: 0, generalScore: 89, switchNote: "Sin metascore propio en Switch; 89 es la nota general de la temporada 1.",
    genre: "Aventura narrativa", horas: 13, comprado: null, slug: "the-walking-dead-a-telltale-games-series",
    desc: "Aventura de Telltale en el universo de The Walking Dead. Lee, un condenado, protege a la pequeña Clementine durante el apocalipsis zombi tomando decisiones difíciles.",
    pros: ["Historia y personajes muy emotivos", "La relación Lee–Clementine es inolvidable", "Las decisiones bajo presión crean mucha tensión", "Ideal para jugar por episodios"],
    cons: ["Casi no hay jugabilidad: es más una película interactiva", "Las decisiones cambian menos de lo que parece", "Motor gráfico anticuado y con tirones"]
  },
  {
    id: "bioshock", title: "BioShock Remastered", cover: "box/bioshock.jpg", year: 2020,
    score: 84, scoreSource: "coleccion", reviews: 35, generalScore: 84, switchNote: "Nota de BioShock: The Collection en Switch (los tres juegos).",
    genre: "Shooter", horas: 13, comprado: null, slug: "bioshock-the-collection",
    desc: "Shooter en primera persona en Rapture, una ciudad submarina utópica que se ha venido abajo. Combina armas y plásmidos (poderes) contra sus habitantes enloquecidos.",
    pros: ["Ambientación art déco legendaria", "Uno de los giros de guion más famosos del medio", "Combinar plásmidos y armas da mucha libertad", "Incluye el DLC y extras"],
    cons: ["El último tercio baja de nivel", "Controles con mando algo rígidos", "El hackeo se vuelve repetitivo"]
  },
  {
    id: "bioshock2", title: "BioShock 2 Remastered", cover: "box/bioshock-2.jpg", year: 2020,
    score: 84, scoreSource: "coleccion", reviews: 35, generalScore: 84, switchNote: "Nota de BioShock: The Collection en Switch (los tres juegos).",
    genre: "Shooter", horas: 11, comprado: null, slug: "bioshock-the-collection",
    desc: "Vuelves a Rapture como un Big Daddy, el primero de su tipo, buscando a tu Little Sister. Incluye la expansión Minerva's Den, muy bien valorada.",
    pros: ["Mejor combate que el primero (doble empuñadura armas + plásmidos)", "Historia más personal y emotiva", "Minerva's Den es de los mejores DLC de la saga"],
    cons: ["Menos sorprendente al repetir ciudad", "Las defensas de Little Sisters se repiten mucho", "Inicio algo lento"]
  },
  {
    id: "bioshockinf", title: "BioShock Infinite: The Complete Edition", cover: "box/bioshock-infinite.jpg", year: 2020,
    score: 84, scoreSource: "coleccion", reviews: 35, generalScore: 94, switchNote: "Nota de BioShock: The Collection en Switch. El original de 2013 tiene un 94.",
    genre: "Shooter", horas: 15, comprado: null, slug: "bioshock-the-collection",
    desc: "Booker DeWitt viaja a Columbia, una ciudad flotante de 1912, para rescatar a Elizabeth. Incluye el DLC Panteón Marino, que conecta con Rapture.",
    pros: ["Columbia es un escenario espectacular", "Elizabeth es una compañera excelente", "Historia y final que dan mucho que pensar", "Los raíles aéreos dan un combate muy dinámico"],
    cons: ["Tiroteos más genéricos que en los anteriores", "Solo puedes llevar dos armas", "Algunos temas se tratan con poca profundidad"]
  },
  {
    id: "limbo", title: "LIMBO", cover: "box/limbo.jpg", year: 2018,
    score: 83, scoreSource: "switch", reviews: 27, generalScore: 90,
    genre: "Plataformas / Puzle", horas: 4, comprado: null, slug: "limbo",
    desc: "Un niño busca a su hermana en un mundo en blanco y negro lleno de trampas mortales y arañas gigantes. El predecesor de INSIDE.",
    pros: ["Estilo visual en silueta inolvidable", "Atmósfera muy inquietante", "Puzles físicos ingeniosos", "Se termina en una tarde"],
    cons: ["Mucho ensayo y error (mueres sin aviso)", "El último tramo baja de nivel", "Historia muy abierta a interpretación"]
  },
  {
    id: "fortnite", title: "Fortnite", cover: "box/fortnite.jpg", year: 2018,
    score: 83, scoreSource: "switch", reviews: 10, generalScore: 78,
    genre: "Battle royale / Online", horas: null, comprado: null, slug: "fortnite",
    desc: "El battle royale gratuito de Epic: 100 jugadores, construcción y temporadas constantes, además de modos como LEGO Fortnite, Rocket Racing y Festival.",
    pros: ["Gratis y con contenido nuevo cada temporada", "Muchos modos además del battle royale", "Crossplay y progreso compartido con otras plataformas", "Colaboraciones con todo tipo de franquicias"],
    cons: ["En Switch rinde peor (resolución baja y 30 fps)", "Muy enfocado a la tienda de skins", "La construcción tiene una curva de aprendizaje muy alta", "Sin final: no es backlog"]
  },
  {
    id: "legoskywalker", title: "LEGO Star Wars: The Skywalker Saga", cover: "box/lego-skywalker.jpg", year: 2022,
    score: 82, scoreSource: "switch", reviews: 17, generalScore: 82,
    genre: "Acción / Aventura", horas: 25, comprado: null, slug: "lego-star-wars-the-skywalker-saga",
    desc: "Las nueve películas de Star Wars en versión LEGO, con un motor nuevo, cámara en tercera persona y planetas abiertos para explorar.",
    pros: ["Las nueve películas en un solo juego", "Humor LEGO muy divertido", "Enorme cantidad de personajes y coleccionables", "Ideal para jugar en cooperativo local"],
    cons: ["En Switch hay recortes gráficos y cargas largas", "Los coleccionables pueden hacerse repetitivos", "El combate es sencillo"]
  },
  {
    id: "sky", title: "Sky: Children of the Light", cover: "box/sky.jpg", year: 2021,
    score: 82, scoreSource: "switch", reviews: 13, generalScore: 82,
    genre: "Aventura social / Online", horas: null, comprado: null, slug: "sky-children-of-the-light",
    desc: "Aventura social gratuita de los creadores de Journey. Vuelas por reinos en las nubes con otros jugadores, devolviendo la luz a las estrellas.",
    pros: ["Precioso y muy relajante", "Una comunidad muy amable y cooperativa", "Gratis, con eventos y temporadas", "Música preciosa"],
    cons: ["Muchos objetos cosméticos de pago", "Rendimiento algo justo en Switch", "Sin un final claro: es más un servicio que una aventura"]
  },
  {
    id: "fallguys", title: "Fall Guys", cover: "box/fall-guys.jpg", year: 2022,
    score: 81, scoreSource: "general", reviews: 2, generalScore: 81, switchNote: "La versión de Switch solo tiene 2 reseñas; 81 es la nota general.",
    genre: "Party / Online", horas: null, comprado: null, slug: "fall-guys",
    desc: "Party game gratuito: hasta 40 'judías' compiten en pruebas absurdas eliminatorias hasta que solo queda uno con la corona.",
    pros: ["Muy divertido y fácil de entender", "Gratis con crossplay", "Partidas cortas", "Creador de niveles con contenido de la comunidad"],
    cons: ["Mucha suerte y caos: puede frustrar", "La tienda tiene mucho peso", "Se vuelve repetitivo", "Sin final"]
  },
  {
    id: "littlenightmares", title: "Little Nightmares", cover: "box/little-nightmares.jpg", year: 2018,
    score: 79, scoreSource: "switch", reviews: null, generalScore: 78, switchNote: "Nota de Little Nightmares: Complete Edition en Switch (incluye el DLC).",
    genre: "Plataformas / Terror", horas: 6, comprado: null, slug: "little-nightmares-complete-edition",
    desc: "Six, una niña con chubasquero amarillo, intenta escapar de las Fauces, un barco lleno de criaturas grotescas. Terror de plataformas y sigilo con estética de cuento macabro.",
    pros: ["Dirección artística y atmósfera brillantes", "Enemigos memorables y muy inquietantes", "Corto e intenso", "La Complete Edition incluye la expansión"],
    cons: ["Muy corto", "Saltos con la profundidad a veces imprecisos", "Muertes por ensayo y error"]
  },
  {
    id: "palia", title: "Palia", cover: "box/palia.jpg", year: 2023,
    score: 77, scoreSource: "general", reviews: 2, generalScore: 77, switchNote: "La versión de Switch solo tiene 2 reseñas; 77 es la nota general.",
    genre: "Simulación social / Online", horas: null, comprado: null, slug: "palia",
    desc: "Simulador de vida online y gratuito: decoras tu parcela, cultivas, cocinas, pescas, cazas y haces amistad con los habitantes del pueblo, junto a otros jugadores.",
    pros: ["Muy acogedor, en la línea de Stardew Valley", "Gratis y sin muros de pago para progresar", "Personajes con historias propias", "Se puede jugar en grupo"],
    cons: ["En Switch rinde y se ve bastante peor que en PC", "Requiere conexión siempre", "Bastante grind en las profesiones", "Sin final"]
  },
  {
    id: "lucky", title: "New Super Lucky's Tale", cover: "box/super-luckys-tale.jpg", year: 2019,
    score: 76, scoreSource: "switch", reviews: 28, generalScore: 76,
    genre: "Plataformas 3D", horas: 12, comprado: null, slug: "new-super-luckys-tale",
    desc: "Plataformas 3D colorido protagonizado por Lucky, un zorro que recorre el Libro de las Eras. Mezcla niveles 3D, 2D y pequeños puzles.",
    pros: ["Encantador y muy colorido", "Buen control y variedad de niveles", "Apto para todos los públicos", "Muy pulido en Switch"],
    cons: ["Fácil para jugadores con experiencia", "Poco original frente a los grandes del género", "Humor que puede resultar infantil"]
  },
  {
    id: "xenoverse2", title: "Dragon Ball Xenoverse 2", cover: "box/xenoverse-2.jpg", year: 2017,
    score: 75, scoreSource: "switch", reviews: 32, generalScore: 72,
    genre: "Lucha / RPG", horas: 30, comprado: null, slug: "dragon-ball-xenoverse-2",
    desc: "Creas tu propio guerrero como Patrullero del Tiempo y corriges alteraciones en la historia de Dragon Ball. Combate 3D en arenas, misiones y una ciudad central online.",
    pros: ["Crear y personalizar tu propio personaje", "Recorre toda la historia de Dragon Ball", "Enorme cantidad de personajes y técnicas", "Contenido y actualizaciones durante años"],
    cons: ["Combate algo caótico y repetitivo", "Muchísimo farmeo para conseguir objetos", "Mucho contenido detrás de DLC", "Rendimiento irregular en Switch"]
  },
  {
    id: "legohp", title: "LEGO Harry Potter Collection", cover: "box/lego-harry-potter.jpg", year: 2018,
    score: 73, scoreSource: "switch", reviews: 10, generalScore: 73,
    genre: "Acción / Aventura", horas: 30, comprado: null, slug: "lego-harry-potter-collection",
    desc: "LEGO Harry Potter Años 1-4 y Años 5-7 remasterizados: las ocho películas en clave LEGO con Hogwarts para explorar y cientos de coleccionables.",
    pros: ["Dos juegos completos", "Hogwarts en versión LEGO es una delicia para fans", "Cooperativo local", "Humor muy logrado"],
    cons: ["Remaster con pocas mejoras", "Cámara y saltos a veces torpes", "Mucho 'busca el ladrillo' repetitivo"]
  },
  {
    id: "ashen", title: "Ashen", cover: "box/ashen.jpg", year: 2019,
    score: 71, scoreSource: "switch", reviews: 4, generalScore: 78, switchNote: "Solo 4 reseñas en Switch; la nota general es 78.",
    genre: "Acción RPG / Soulslike", horas: 20, comprado: null, slug: "ashen",
    desc: "Soulslike de mundo abierto con estética minimalista. Exploras un mundo sin luz, reconstruyes un asentamiento y te acompañan otros jugadores que aparecen como aliados.",
    pros: ["Estilo artístico muy personal", "El sistema de compañeros (online o IA) es original", "Más accesible que otros soulslike", "Construir el poblado da sensación de progreso"],
    cons: ["El port de Switch tiene recortes técnicos", "Variedad de enemigos y armas limitada", "Mazmorras muy oscuras y algo confusas"]
  },
  {
    id: "unite", title: "Pokémon UNITE", cover: "box/pokemon-unite.jpg", year: 2021,
    score: 70, scoreSource: "switch", reviews: 31, generalScore: 70,
    genre: "MOBA / Online", horas: null, comprado: null, slug: "pokemon-unite",
    desc: "MOBA gratuito de Pokémon: equipos de 5 contra 5 capturan Pokémon salvajes y anotan puntos en las porterías rivales en partidas de unos 10 minutos.",
    pros: ["Partidas cortas y accesibles", "Gratis y con crossplay con móvil", "Buena introducción a los MOBA", "Muchos Pokémon jugables"],
    cons: ["Monetización agresiva (objetos que dan ventaja, licencias)", "Equilibrio de personajes discutido", "Partidas clasificatorias frustrantes", "Sin final"]
  },
  {
    id: "speedstorm", title: "Disney Speedstorm", cover: "box/speedstorm.jpg", year: 2023,
    score: 66, scoreSource: "switch", reviews: 5, generalScore: 74,
    genre: "Carreras arcade / Online", horas: null, comprado: null, slug: "disney-speedstorm",
    desc: "Carreras de karts gratuitas con personajes de Disney y Pixar, cada uno con habilidades propias, en circuitos inspirados en sus películas.",
    pros: ["Muchos personajes de Disney y Pixar", "Conducción con derrapes y habilidades más técnica de lo que parece", "Gratis con crossplay", "Temporadas con contenido nuevo"],
    cons: ["En Switch se ve y rinde peor", "Desbloquear personajes requiere mucho grind o pagar", "Sin final"]
  },
  {
    id: "jedioutcast", title: "Star Wars Jedi Knight II: Jedi Outcast", cover: "box/jedi-outcast.jpg", year: 2019,
    score: 64, scoreSource: "switch", reviews: 11, generalScore: 89, switchNote: "El original de 2002 tiene un 89; el port de Switch salió peor valorado por sus controles.",
    genre: "Shooter / Acción", horas: 12, comprado: null, slug: "star-wars-jedi-knight-ii-jedi-outcast",
    desc: "Clásico de 2002: Kyle Katarn recupera sus poderes Jedi. Empieza como shooter y evoluciona a combates con sable de luz y poderes de la Fuerza.",
    pros: ["Combate con sable de luz que sigue siendo muy bueno", "Poderes de la Fuerza muy divertidos", "Un clásico de Star Wars", "Historia sólida del Universo Expandido"],
    cons: ["El port tiene controles torpes con mando", "Primeros niveles lentos y con laberintos", "Gráficos muy anticuados"]
  },
  {
    id: "falloutshelter", title: "Fallout Shelter", cover: "box/fallout-shelter.jpg", year: 2018,
    score: 61, scoreSource: "switch", reviews: 4, generalScore: 71, switchNote: "Solo 4 reseñas en Switch; la nota general es 71.",
    genre: "Gestión", horas: null, comprado: null, slug: "fallout-shelter",
    desc: "Gestionas un refugio de Fallout: construyes salas, asignas habitantes, administras recursos y mandas exploradores al páramo.",
    pros: ["Gratis y adictivo al principio", "Humor y estética de Fallout", "Ideal para ratos muy cortos"],
    cons: ["Repetitivo pasadas unas horas", "Pensado para móvil: en Switch los controles son peores", "Poca profundidad de gestión", "Sin final"]
  },
  {
    id: "hunters", title: "Star Wars: Hunters", cover: "box/sw-hunters.jpg", year: 2024,
    score: 56, scoreSource: "switch", reviews: 11, generalScore: 56,
    genre: "Shooter / Online", horas: null, comprado: null, slug: "star-wars-hunters",
    desc: "Shooter de arena 4 contra 4 gratuito, con personajes originales del universo Star Wars, cada uno con habilidades propias.",
    pros: ["Gratis", "Estética Star Wars bien lograda", "Partidas cortas"],
    cons: ["Poco contenido y modos", "Monetización muy presente", "Sus servidores tenían cierre anunciado: comprueba si aún funciona", "Sin final"]
  },
  {
    id: "7daysheroes", title: "7 Days Heroes", cover: "box/7-days-heroes.jpg", year: 2024,
    score: null, scoreSource: "none", reviews: 0, generalScore: null, switchNote: "No tiene ninguna nota en Metacritic.",
    genre: "Plataformas", horas: 6, comprado: null, slug: "7-days-heroes",
    desc: "Plataformas 2D de estilo retro: una IA llamada MAI convierte a la población en zombis y tres héroes con habilidades especiales (y su perro) intentan detenerla a lo largo de 30 niveles.",
    pros: ["Cambias entre 4 personajes con habilidades distintas", "Estilo retro", "Corto: 30 niveles en 7 zonas"],
    cons: ["Sin reseñas de crítica que respalden su calidad", "Juego pequeño y de bajo presupuesto", "La duración es una estimación"]
  }
];
