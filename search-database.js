const searchDatabase = [
  // Index
  { title: "La Guía Definitiva", page: "index", url: "index.html" },
  { title: "Juego", page: "index", url: "index.html" },
  { title: "Curso", page: "index", url: "index.html" },
  { title: "Islas", page: "index", url: "index.html" },
  { title: "DLC", page: "index", url: "index.html" },
  { title: "Jefes Finales", page: "index", url: "index.html" },
  { title: "Logros", page: "index", url: "index.html" },
  { title: "Secretos", page: "index", url: "index.html" },

  // Juego
  { title: "Introducción al Juego", page: "juego", url: "juego.html" },
  { title: "Objetivo del Juego", page: "juego", url: "juego.html" },
  { title: "Mecánicas Principales", page: "juego", url: "juego.html" },
  { title: "Armas", page: "juego", url: "juego.html" },
  { title: "Peashooter", page: "juego", url: "juego.html" },
  { title: "Spread", page: "juego", url: "juego.html" },
  { title: "Chaser", page: "juego", url: "juego.html" },
  { title: "Lobber", page: "juego", url: "juego.html" },
  { title: "Charge", page: "juego", url: "juego.html" },
  { title: "Roundabout", page: "juego", url: "juego.html" },
  { title: "Crackshot", page: "juego", url: "juego.html" },
  { title: "Converge", page: "juego", url: "juego.html" },
  { title: "Twist-Up", page: "juego", url: "juego.html" },
  { title: "Amuletos", page: "juego", url: "juego.html" },
  { title: "Smoke Dash", page: "juego", url: "juego.html" },
  { title: "P. Sugar", page: "juego", url: "juego.html" },
  { title: "Whetstone", page: "juego", url: "juego.html" },
  { title: "Coffee", page: "juego", url: "juego.html" },
  { title: "Twin Heart", page: "juego", url: "juego.html" },
  { title: "Broken Relic", page: "juego", url: "juego.html" },
  { title: "Astral Cookie", page: "juego", url: "juego.html" },
  { title: "Heart Ring", page: "juego", url: "juego.html" },
  { title: "Divine Relic", page: "juego", url: "juego.html" },
  { title: "Super Artes", page: "juego", url: "juego.html" },
  { title: "Energy Beam", page: "juego", url: "juego.html" },
  { title: "Invincibility", page: "juego", url: "juego.html" },
  { title: "Giant Ghost", page: "juego", url: "juego.html" },

  // Curso
  { title: "Curso General para Dominar Cuphead", page: "curso", url: "curso.html" },
  { title: "Parry a Absolutamente Todo lo Rosa", page: "curso", url: "curso.html" },
  { title: "No Dispares por Disparar: Cambia de Arma", page: "curso", url: "curso.html" },
  { title: "Smoke Bomb para Estudiar", page: "curso", url: "curso.html" },
  { title: "Cambia de Posición Constantemente", page: "curso", url: "curso.html" },
  { title: "Memoriza las Animaciones de Advertencia", page: "curso", url: "curso.html" },
  { title: "Usa EX Shots con Inteligencia", page: "curso", url: "curso.html" },
  { title: "Conoce tus Puntos de Invulnerabilidad", page: "curso", url: "curso.html" },
  { title: "Juega Primero en Fácil", page: "curso", url: "curso.html" },
  { title: "No Olvides las Monedas", page: "curso", url: "curso.html" },
  { title: "Fallar y Volver a Intentar", page: "curso", url: "curso.html" },

  // Islas 1 2 y 3 ademas de Islas en general
  { title: "Las Islas", page: "islas", url: "islas.html" },
  { title: "Inkwell Isla 1", page: "islas", url: "islas.html" },
  { title: "Inkwell Isla 2", page: "islas", url: "islas.html" },
  { title: "Inkwell Isla 3", page: "islas", url: "islas.html" },
  { title: "Inkwell Hell", page: "islas", url: "islas.html" },
  { title: "The Root Pack", page: "islas", url: "islas.html" },
  { title: "Goopy Le Grande", page: "islas", url: "islas.html" },
  { title: "Ribby and Croaks", page: "islas", url: "islas.html" },
  { title: "Hilda Berg", page: "islas", url: "islas.html" },
  { title: "Cagney Carnation", page: "islas", url: "islas.html" },
  { title: "Baroness Von Bon Bon", page: "islas", url: "islas.html" },
  { title: "Beppi the Clown", page: "islas", url: "islas.html" },
  { title: "Djimmi the Great", page: "islas", url: "islas.html" },
  { title: "Grim Matchstick", page: "islas", url: "islas.html" },
  { title: "Wally Warbles", page: "islas", url: "islas.html" },
  { title: "Rumor Honeybottoms", page: "islas", url: "islas.html" },
  { title: "Captain Brineybeard", page: "islas", url: "islas.html" },
  { title: "Sally Stageplay", page: "islas", url: "islas.html" },
  { title: "Dr. Kahl's Robot", page: "islas", url: "islas.html" },
  { title: "Werner Werman", page: "islas", url: "islas.html" },
  { title: "Cala Maria", page: "islas", url: "islas.html" },
  { title: "Phantom Express", page: "islas", url: "islas.html" },

  // DLC
  { title: "The Delicious Last Course", page: "dlc", url: "dlc.html" },
  { title: "Ms. Chalice", page: "dlc", url: "dlc.html" },
  { title: "Nueva Dificultad", page: "dlc", url: "dlc.html" },
  { title: "Moonshine Mob", page: "dlc", url: "dlc.html" },
  { title: "Glumstone the Giant", page: "dlc", url: "dlc.html" },
  { title: "Mortimer Freeze", page: "dlc", url: "dlc.html" },
  { title: "Howling Aces", page: "dlc", url: "dlc.html" },
  { title: "Esther Winchester", page: "dlc", url: "dlc.html" },
  { title: "Chef Saltbaker", page: "dlc", url: "dlc.html" },

  // página Jefes Finales
  { title: "Los Jefes Finales", page: "jefes-finales", url: "jefes-finales.html" },
  { title: "King Dice", page: "jefes-finales", url: "jefes-finales.html" },
  { title: "The Devil", page: "jefes-finales", url: "jefes-finales.html" },
  { title: "Diablo", page: "jefes-finales", url: "jefes-finales.html" },

  // Logros
  { title: "Logros y Trofeos", page: "logros", url: "logros.html" },
  { title: "Presentación", page: "logros", url: "logros.html" },
  { title: "Cien Parries", page: "logros", url: "logros.html" },
  { title: "A+ Superior", page: "logros", url: "logros.html" },
  { title: "Completa el Juego", page: "logros", url: "logros.html" },

  // Secretos
  { title: "Secretos", page: "secretos", url: "secretos.html" },
  { title: "Jefes Secretos", page: "secretos", url: "secretos.html" },
  { title: "Monedas Ocultas", page: "secretos", url: "secretos.html" },
  { title: "Ángel y Demonio", page: "secretos", url: "secretos.html" },
  { title: "Acertijo del Cementerio", page: "secretos", url: "secretos.html" },
  { title: "Reliquia Maldita", page: "secretos", url: "secretos.html" },
  { title: "Divine Relic", page: "secretos", url: "secretos.html" },

  // Personajes
  { title: "Personajes Principales", page: "personajes", url: "personajes.html" },
  { title: "Cuphead", page: "personajes", url: "personajes.html" },
  { title: "Mugman", page: "personajes", url: "personajes.html" },
  { title: "Ms. Chalice", page: "personajes", url: "personajes.html" },

  // Desarrolladores
  { title: "Los Creadores", page: "desarrolladores", url: "desarrolladores.html" },
  { title: "Studio MDHR", page: "desarrolladores", url: "desarrolladores.html" },
  { title: "Chad Moldenhauer", page: "desarrolladores", url: "desarrolladores.html" },
  { title: "Jared Moldenhauer", page: "desarrolladores", url: "desarrolladores.html" },

  // Comunidad
  { title: "Comunidad Cuphead", page: "comunidad", url: "comunidad.html" },
  { title: "Funciones de Comunidad", page: "comunidad", url: "comunidad.html" },

  // Folleto
  { title: "Folleto Cuphead", page: "folleto", url: "folleto.html" },
]

function performSearch(query) {
  if (!query || query.trim().length === 0) {
    return []
  }

  const searchTerm = query.toLowerCase()
  return searchDatabase.filter((item) => item.title.toLowerCase().includes(searchTerm))
}
