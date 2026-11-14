document.addEventListener('alpine:init', () => {
    Alpine.data('pulsoApp', () => ({
          activeTab: 'dashboard',
          selectedUser: 'pepito',
          usersData: {
              pepito: { name: 'Pepito (21 años, Comuna 12)', role: 'Joven • Repuesto y Celulares', skills: ['Reparación de celulares', 'Atención al cliente', 'Aprendizaje rápido', 'Redes sociales', 'Manejo de inventario'], schedule: 'Flexible', modality: 'Presencial', accessibility: 'Instrucciones paso a paso', roleMatch: 'Soporte digital' },
              marta: { name: 'Marta (Madre Cabeza de Hogar, Comuna 7)', role: 'Gastronomía & Cuidados', skills: ['Cocina', 'Preparación de alimentos', 'Logística', 'Atención al cliente', 'Administración'], schedule: 'Diurno', modality: 'Presencial', accessibility: 'Horario compatible con cuidado', roleMatch: 'Cocina y apoyo logístico' },
              camila: { name: 'Camila (Persona con Discapacidad, Comuna 5)', role: 'Diseño & Atención Chat', skills: ['Diseño gráfico', 'Atención por chat', 'Comunicación escrita', 'Redes sociales', 'Accesibilidad digital'], schedule: 'Flexible', modality: 'Remota', accessibility: 'Herramientas compatibles con lector de pantalla', roleMatch: 'Diseño y atención digital accesible' }
          },
          jobSuggestions: [
              { userId: 'pepito', title: 'Reparación básica de celulares', area: 'Tecnología y soporte' },
              { userId: 'pepito', title: 'Apoyo en redes sociales para negocios', area: 'Tecnología y soporte' },
              { userId: 'pepito', title: 'Asistente de soporte digital barrial', area: 'Tecnología y soporte' },
              { userId: 'marta', title: 'Auxiliar de cocina para eventos', area: 'Gastronomía y logística' },
              { userId: 'marta', title: 'Apoyo en preparación de alimentos', area: 'Gastronomía y logística' },
              { userId: 'marta', title: 'Asistente de logística comunitaria', area: 'Gastronomía y logística' },
              { userId: 'camila', title: 'Diseño gráfico para canales digitales', area: 'Diseño y atención digital' },
              { userId: 'camila', title: 'Atención al cliente por chat', area: 'Diseño y atención digital' },
              { userId: 'camila', title: 'Asistente de contenidos accesibles', area: 'Diseño y atención digital' }
          ],
          employers: [
              { id: 'brillo', name: 'Peluquería Brillo del Puerto', job: 'Aprendiz de peluquería', icon: 'bi-scissors', skills: ['Cuidado del cabello', 'Atención al cliente', 'Aprendizaje rápido'], experience: 'No requiere experiencia; capacitación inicial propuesta.', location: 'Calle 3 · Pueblo Nuevo, Isla Cascajal', coordinates: [3.8856857, -77.0746755] },
              { id: 'raices', name: 'Salón Raíces', job: 'Auxiliar de peluquería', icon: 'bi-brush', skills: ['Cuidado del cabello', 'Atención al cliente', 'Aprendizaje rápido'], experience: 'Con o sin experiencia; ganas de aprender.', location: 'Calle 8 · Sociedad Portuaria, Isla Cascajal', coordinates: [3.8888008, -77.0646026] },
              { id: 'celulares', name: 'Tienda Celulares Puerto', job: 'Auxiliar de reparación', icon: 'bi-phone-fill', skills: ['Reparación de celulares', 'Atención al cliente'], experience: 'Se valora la práctica; la experiencia formal no es indispensable.', location: 'Calle 2 · Alberto Lleras Camargo, Isla Cascajal', coordinates: [3.8758671, -77.0613246] },
              { id: 'tecnobahia', name: 'Taller TecnoBahía', job: 'Apoyo técnico e inventario', icon: 'bi-tools', skills: ['Reparación de celulares', 'Manejo de inventario'], experience: 'Experiencia deseable, no obligatoria.', location: 'Calle 6 · El Campín', coordinates: [3.8816465, -77.0320945] },
              { id: 'marea', name: 'Cocina La Marea', job: 'Auxiliar de cocina', icon: 'bi-egg-fried', skills: ['Cocina', 'Preparación de alimentos'], experience: 'Experiencia práctica valorada; la experiencia formal no es indispensable.', location: 'Calle 6 · La Naval', coordinates: [3.8835441, -77.0268729] },
              { id: 'sazon', name: 'Catering Sazón del Pacífico', job: 'Apoyo para eventos', icon: 'bi-cup-hot-fill', skills: ['Preparación de alimentos', 'Logística'], experience: 'Capacitación inicial propuesta.', location: 'Calle 3 · María Eugenia Rojas', coordinates: [3.8802552, -77.022385] },
              { id: 'comedor', name: 'Comedor Buen Vecino', job: 'Auxiliar de preparación', icon: 'bi-shop', skills: ['Cocina', 'Logística'], experience: 'No requiere experiencia formal.', location: 'Calle 6 · Los Laureles', coordinates: [3.8745489, -77.0032867] },
              { id: 'mercado', name: 'Mercadito La 12', job: 'Apoyo de tienda', icon: 'bi-basket2-fill', skills: ['Atención al cliente', 'Manejo de inventario'], experience: 'Se valora la disposición para aprender.', location: 'Calle 10 · Américas', coordinates: [3.8768708, -76.995127] },
              { id: 'digital', name: 'Agencia Digital Pacífico', job: 'Asistente de redes', icon: 'bi-megaphone-fill', skills: ['Diseño gráfico', 'Redes sociales'], experience: 'Portafolio o muestras de trabajo deseables.', location: 'Calle 3 · Puerto del Mar', coordinates: [3.8692778, -76.9969445] },
              { id: 'mangle', name: 'Mangle Creativo', job: 'Apoyo de diseño', icon: 'bi-palette-fill', skills: ['Diseño gráfico', 'Comunicación escrita'], experience: 'Se aceptan proyectos de práctica como experiencia.', location: 'Calle 9 · Sociedad Portuaria, Isla Cascajal', coordinates: [3.8914063, -77.0769777] },
              { id: 'chat', name: 'Atención Costa', job: 'Agente de atención por chat', icon: 'bi-chat-dots-fill', skills: ['Atención por chat', 'Comunicación escrita'], experience: 'No requiere experiencia formal.', location: 'Calle 1 · Viento Libre, Isla Cascajal', coordinates: [3.8799619, -77.0689742] },
              { id: 'accesible', name: 'Conecta Buenaventura', job: 'Asistente de contenidos accesibles', icon: 'bi-universal-access-circle', skills: ['Accesibilidad digital', 'Redes sociales'], experience: 'Se valora la experiencia propia y el aprendizaje continuo.', location: 'Calle 7 · Santa Cruz, Isla Cascajal', coordinates: [3.8845063, -77.0496994] }
          ],
          skillAliases: [
              { skill: 'Cuidado del cabello', terms: ['peluqueria', 'peluquero', 'peluquera', 'cabello', 'cortar pelo', 'corte de pelo', 'barberia', 'barbero', 'peinar'] },
              { skill: 'Reparación de celulares', terms: ['celular', 'celulares', 'telefono', 'telefonos', 'reparar', 'reparacion', 'tecnico'] },
              { skill: 'Atención al cliente', terms: ['atencion al cliente', 'servicio al cliente', 'atender personas', 'ventas'] },
              { skill: 'Aprendizaje rápido', terms: ['aprender rapido', 'aprendo rapido', 'sin experiencia', 'no tengo experiencia', 'con o sin experiencia', 'primera oportunidad', 'disposicion para aprender'] },
              { skill: 'Redes sociales', terms: ['redes sociales', 'instagram', 'facebook', 'tiktok', 'publicaciones'] },
              { skill: 'Manejo de inventario', terms: ['inventario', 'organizar productos', 'almacen'] },
              { skill: 'Cocina', terms: ['cocina', 'cocinar', 'cocinero', 'cocinera', 'alimentos', 'comida'] },
              { skill: 'Preparación de alimentos', terms: ['preparar alimentos', 'preparacion de alimentos', 'preparar comida', 'eventos'] },
              { skill: 'Logística', terms: ['logistica', 'organizar eventos', 'organizacion'] },
              { skill: 'Diseño gráfico', terms: ['diseno', 'diseno grafico', 'diseño', 'grafico', 'canva'] },
              { skill: 'Atención por chat', terms: ['chat', 'atencion por chat', 'mensajes'] },
              { skill: 'Comunicación escrita', terms: ['comunicacion escrita', 'escribir', 'redactar'] },
              { skill: 'Accesibilidad digital', terms: ['accesibilidad', 'lector de pantalla', 'contenido accesible'] }
          ],
          currentTime: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          clockTimer: null,
          get employmentAnalytics() {
              const profiles = Object.entries(this.usersData).map(([userId, user]) => ({
                  userId,
                  name: user.name.split(' (')[0],
                  count: this.jobSuggestions.filter(suggestion => suggestion.userId === userId).length
              }));
              const areaCounts = this.jobSuggestions.reduce((counts, suggestion) => {
                  counts[suggestion.area] = (counts[suggestion.area] || 0) + 1;
                  return counts;
              }, {});
              const areas = Object.entries(areaCounts)
                  .map(([name, count]) => ({ name, count }))
                  .sort((first, second) => second.count - first.count);

              return {
                  profileCount: profiles.length,
                  suggestionCount: this.jobSuggestions.length,
                  profiles,
                  areas,
                  maxProfileCount: Math.max(1, ...profiles.map(profile => profile.count)),
                  maxAreaCount: Math.max(1, ...areas.map(area => area.count))
              };
          },
          scheduleOptions: ['Diurno', 'Nocturno', 'Flexible'],
          modalityOptions: ['Presencial', 'Híbrida', 'Remota'],
          accessibilityOptions: {
              pepito: ['Ningún apoyo por ahora', 'Instrucciones paso a paso', 'Capacitación con acompañamiento'],
              marta: ['Horario compatible con cuidado', 'Pausas flexibles', 'Apoyo para el cuidado durante la jornada'],
              camila: ['Ningún ajuste por ahora', 'Herramientas compatibles con lector de pantalla', 'Navegación por teclado', 'Subtítulos e instrucciones escritas', 'Ajustes en el puesto de trabajo']
          },
          waMessages: [],
          matchResult: null,
          interactionMode: 'text',
          draftMessage: '',
          voiceStatus: '',
          voiceListening: false,
          voiceRecognition: null,
          selectedEmployerId: null,
          conversationSkills: [],
          matchBasisLabel: 'habilidades del perfil',
          get matchedEmployers() {
              const skills = this.conversationSkills.length
                  ? this.conversationSkills
                  : this.usersData[this.selectedUser].skills;
              return this.employers.map(employer => ({
                  ...employer,
                  matchingSkills: employer.skills.filter(skill => skills.includes(skill))
              })).filter(employer => employer.matchingSkills.length > 0)
                  .sort((first, second) => second.matchingSkills.length - first.matchingSkills.length);
          },

          initSimulator() {
              this.resetWa();
          },
          startClock() {
              if (this.clockTimer) return;
              this.clockTimer = setInterval(() => {
                  this.currentTime = new Date().toLocaleTimeString('es-CO', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                  });
              }, 1000);
          },
          destroy() {
              if (this.clockTimer) clearInterval(this.clockTimer);
          },
          setInteractionMode(mode) {
              if (this.voiceListening && this.voiceRecognition) this.voiceRecognition.stop();
              this.voiceListening = false;
              this.interactionMode = mode;
              this.voiceStatus = '';
              if (window.speechSynthesis) window.speechSynthesis.cancel();
          },
          normalizeText(text) {
              return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
          },
          processMessage(text) {
              const message = text.trim();
              if (!message) return;
              this.waMessages.push({ sender: 'user', text: message });
              const responseMode = this.interactionMode;
              const current = this.usersData[this.selectedUser];
              const normalizedMessage = this.normalizeText(message);
              const mentionedSkills = this.skillAliases
                  .filter(item => item.terms.some(term => normalizedMessage.includes(term)))
                  .map(item => item.skill);
              this.conversationSkills = mentionedSkills.length ? mentionedSkills : [];
              this.matchBasisLabel = mentionedSkills.length ? 'lo que escribiste' : 'habilidades del perfil de ' + current.name.split(' (')[0];
              const companies = this.matchedEmployers;
              const response = 'Revisé ' + this.matchBasisLabel + ' y encontré ' + companies.length +
                  ' negocios con habilidades relacionadas. Mira la lista y la habilidad que coincide en cada tarjeta. Tu horario preferido es ' +
                  current.schedule.toLowerCase() + ', tu modalidad es ' + current.modality.toLowerCase() +
                  ' y el apoyo que elegiste es: ' + current.accessibility + '.';
              this.matchResult = {
                  role: current.roleMatch,
                  criteria: mentionedSkills.length ? mentionedSkills : current.skills,
                  basis: this.matchBasisLabel,
                  schedule: current.schedule,
                  modality: current.modality,
                  accessibility: current.accessibility,
                  companies
              };
              setTimeout(() => {
                  this.waMessages.push({ sender: 'bot', text: response });
                  if (responseMode === 'voice') this.speakText(response);
              }, 350);
          },
          sendTextMessage() {
              const message = this.draftMessage;
              this.draftMessage = '';
              this.processMessage(message);
          },
          startVoiceInput() {
              const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
              if (!SpeechRecognition) {
                  this.voiceStatus = 'Este navegador no permite dictado por voz. Puedes elegir Texto para continuar.';
                  return;
              }
              if (this.voiceListening) {
                  this.voiceRecognition.stop();
                  return;
              }
              const recognition = new SpeechRecognition();
              this.voiceRecognition = recognition;
              recognition.lang = 'es-CO';
              recognition.interimResults = false;
              recognition.maxAlternatives = 1;
              recognition.onstart = () => {
                  this.voiceListening = true;
                  this.voiceStatus = 'Escuchando… habla ahora.';
              };
              recognition.onresult = event => {
                  const transcript = event.results[0][0].transcript;
                  this.voiceListening = false;
                  this.voiceStatus = 'Mensaje reconocido.';
                  this.processMessage(transcript);
              };
              recognition.onerror = event => {
                  this.voiceListening = false;
                  this.voiceStatus = 'No se pudo reconocer la voz (' + event.error + '). Intenta de nuevo o elige Texto.';
              };
              recognition.onend = () => {
                  this.voiceListening = false;
                  if (this.voiceStatus === 'Escuchando… habla ahora.') {
                      this.voiceStatus = 'No se detectó voz. Intenta de nuevo.';
                  }
              };
              try {
                  recognition.start();
              } catch (error) {
                  this.voiceListening = false;
                  this.voiceStatus = 'No se pudo iniciar el micrófono. Revisa los permisos del navegador.';
              }
          },
          speakText(text) {
              if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
                  this.voiceStatus = 'El navegador no permite leer la respuesta en voz alta.';
                  return;
              }
              const utterance = new window.SpeechSynthesisUtterance(text);
              utterance.lang = 'es-CO';
              window.speechSynthesis.speak(utterance);
          },
          selectEmployer(employerId) {
              const employer = this.matchedEmployers.find(item => item.id === employerId);
              if (!employer) return;
              this.selectedEmployerId = employerId;
              this.waMessages.push({
                  sender: 'bot',
                  text: 'Elegiste explorar "' + employer.name + ' · ' + employer.job +
                      '". La coincidencia es orientativa; no se envió una solicitud ni se contactó a un empleador.'
              });
          },
          openEmployerChat(employerId) {
              const employer = this.employers.find(item => item.id === employerId);
              if (!employer) return;
              const matchingUser = Object.entries(this.usersData).find(([, user]) =>
                  employer.skills.some(skill => user.skills.includes(skill))
              );
              if (matchingUser && !employer.skills.some(skill => this.usersData[this.selectedUser].skills.includes(skill))) {
                  this.selectedUser = matchingUser[0];
              }
              this.activeTab = 'whatsapp';
              this.resetWa();
              this.matchResult = {
                  role: this.usersData[this.selectedUser].roleMatch,
                  criteria: this.usersData[this.selectedUser].skills,
                  basis: 'habilidades del perfil de ' + this.usersData[this.selectedUser].name.split(' (')[0],
                  schedule: this.usersData[this.selectedUser].schedule,
                  modality: this.usersData[this.selectedUser].modality,
                  accessibility: this.usersData[this.selectedUser].accessibility,
                  companies: this.matchedEmployers
              };
              this.selectEmployer(employerId);
          },
          resetWa() {
              if (this.voiceRecognition && this.voiceListening) this.voiceRecognition.stop();
              if (window.speechSynthesis) window.speechSynthesis.cancel();
              this.voiceListening = false;
              this.voiceStatus = '';
              this.draftMessage = '';
              this.matchResult = null;
              this.conversationSkills = [];
              this.matchBasisLabel = 'habilidades del perfil';
              this.selectedEmployerId = null;
              this.waMessages = [
                  { sender: 'bot', text: '¡Hola! Cuéntame por texto o por voz qué sabes hacer y qué tipo de oportunidad buscas. Te mostraré negocios que coinciden con tus habilidades.' }
              ];
          },

          initMap() {
              this.startClock();
              setTimeout(() => {
                  if(window.mapInitialized) return;
                  const map = L.map('map');
                  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                      maxZoom: 19,
                      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors • PULSO Cívico'
                  }).addTo(map);

                  this.employers.forEach(employer => {
                      const popup = document.createElement('div');
                      const title = document.createElement('strong');
                      const list = document.createElement('ul');
                      const note = document.createElement('p');
                      const experience = document.createElement('p');
                      const button = document.createElement('button');

                      title.textContent = employer.name + ' · ' + employer.job;
                      employer.skills.forEach(skill => {
                          const item = document.createElement('li');
                          item.textContent = 'Habilidad: ' + skill;
                          list.appendChild(item);
                      });
                      experience.textContent = employer.experience;
                      note.textContent = 'Sector y calle de referencia; no es la dirección de un negocio ni confirma una vacante.';
                      const location = document.createElement('p');
                      location.textContent = 'Sector: ' + employer.location;
                      button.type = 'button';
                      button.className = 'offer-map-match-button';
                      button.textContent = 'Explorar coincidencia en el chat';
                      button.addEventListener('click', () => this.openEmployerChat(employer.id));
                      popup.append(title, list, experience, location, note, button);

                      const icon = L.divIcon({
                          className: 'offer-map-marker-container',
                          html: '<span class="offer-map-marker" aria-hidden="true"><i class="bi ' + employer.icon + '"></i></span>',
                          iconSize: [24, 24],
                          iconAnchor: [12, 12]
                      });
                      L.marker(employer.coordinates, {
                          icon,
                          title: employer.name + ' · ' + employer.job
                      }).bindPopup(popup, { maxWidth: 280 }).addTo(map);
                  });

                  const markerBounds = this.employers.map(employer => employer.coordinates);
                  map.fitBounds(markerBounds, { padding: [32, 32], maxZoom: 13 });
                  window.mapInitialized = true;
              }, 300);
          },

          safetyAlerts: [],
          reportSent: false
      }));
});
