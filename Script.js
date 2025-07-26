document.addEventListener('DOMContentLoaded', () => {
    const gradeCurricularDiv = document.getElementById('grade-curricular');

    // Definição das disciplinas com seus pré-requisitos e semestre
    const disciplinas = [
        // Semestre 1 (Disciplinas que você já fez)
        { id: 'ana-humana', nome: 'Anatomia Humana', semestre: 1, prerequisitos: [], concluida: true },
        { id: 'fisio-humana', nome: 'Fisiologia Humana', semestre: 1, prerequisitos: [], concluida: true },
        { id: 'histo-embrio', nome: 'Histologia e Embriologia', semestre: 1, prerequisitos: [], concluida: true },
        { id: 'voz-fisio', nome: 'Voz e Fisiologia da Fonação', semestre: 1, prerequisitos: [], concluida: true },
        { id: 'mo', nome: 'Aspectos da Motricidade Orofacial', semestre: 1, prerequisitos: [], concluida: true },
        { id: 'fonetica-fonologia', nome: 'Fonética e Fonologia', semestre: 1, prerequisitos: [], concluida: true },
        { id: 'proj-tec', nome: 'Projeto Integrador – Fonoaudiologia e Tecnologia', semestre: 1, prerequisitos: [], concluida: true },

        // Semestre 2
        { id: 'fund-audio', nome: 'Fundamentos de Audiologia', semestre: 2, prerequisitos: [] },
        { id: 'desenv-ling-oral', nome: 'Desenvolvimento da Linguagem Oral', semestre: 2, prerequisitos: [] },
        { id: 'psico-desenv', nome: 'Psicologia do Desenvolvimento', semestre: 2, prerequisitos: [] },
        { id: 'prod-leitura', nome: 'Produção de Leitura e de Texto', semestre: 2, prerequisitos: [] },
        { id: 'bioestatistica', nome: 'Bioestatística', semestre: 2, prerequisitos: [] },
        { id: 'sociologia', nome: 'Sociologia', semestre: 2, prerequisitos: [] },
        { id: 'filosofia', nome: 'Filosofia', semestre: 2, prerequisitos: [] },

        // Semestre 3
        { id: 'audio-infantil', nome: 'Audiologia Infantil', semestre: 3, prerequisitos: ['fund-audio'] },
        { id: 'audio-adulto', nome: 'Audiologia no Adulto', semestre: 3, prerequisitos: ['fund-audio'] },
        { id: 'aval-interv-ling-oral', nome: 'Avaliação e Intervenção dos Distúrbios da Linguagem Oral', semestre: 3, prerequisitos: ['desenv-ling-oral'] },
        { id: 'aval-interv-disfonias', nome: 'Avaliação e intervenção das disfonias', semestre: 3, prerequisitos: ['voz-fisio'] },
        { id: 'aval-interv-mo', nome: 'Avaliação e intervenção em motricidade orofacial', semestre: 3, prerequisitos: ['mo'] },
        { id: 'libras', nome: 'Língua Brasileira de Sinais – LIBRAS', semestre: 3, prerequisitos: [] },
        { id: 'praticas-interprof', nome: 'Práticas interprofissionais na saúde', semestre: 3, prerequisitos: [] },

        // Semestre 4
        { id: 'reab-auditiva', nome: 'Reabilitação auditiva', semestre: 4, prerequisitos: ['audio-infantil', 'audio-adulto'] },
        { id: 'aspectos-ling-escrita', nome: 'Aspectos da linguagem escrita', semestre: 4, prerequisitos: ['desenv-ling-oral'] },
        { id: 'fluencia-disfluencia', nome: 'Fluência e Disfluência', semestre: 4, prerequisitos: [] },
        { id: 'dist-neuro-adq', nome: 'Distúrbios Neurológicos Adquiridos', semestre: 4, prerequisitos: ['fisio-humana'] }, // Exemplo de pré-requisito
        { id: 'politicas-saude', nome: 'Políticas de Saúde', semestre: 4, prerequisitos: [] },
        { id: 'invest-cientifica', nome: 'Investigação Científica', semestre: 4, prerequisitos: [] },
        { id: 'proj-ciclos-vida', nome: 'Projeto integrador – A fonoaudiologia e os ciclos da vida', semestre: 4, prerequisitos: [] },

        // Semestre 5
        { id: 'hab-auditiva', nome: 'Habilitação auditiva', semestre: 5, prerequisitos: ['reab-auditiva'] },
        { id: 'aval-interv-ling-escrita', nome: 'Avaliação e intervenção dos distúrbios da linguagem escrita', semestre: 5, prerequisitos: ['aspectos-ling-escrita', 'aval-interv-ling-oral'] },
        { id: 'fono-hospitalar', nome: 'Fonoaudiologia Hospitalar', semestre: 5, prerequisitos: ['dist-neuro-adq'] },
        { id: 'proj-fono-clinica', nome: 'Projeto integrador – Fonoaudiologia clínica', semestre: 5, prerequisitos: [] },
        { id: 'comp-socioemocionais', nome: 'Competências socioemocionais', semestre: 5, prerequisitos: [] },
        { id: 'criatividade-inovacao', nome: 'Criatividade e inovação', semestre: 5, prerequisitos: [] },
        { id: 'empreendedorismo', nome: 'Empreendedorismo', semestre: 5, prerequisitos: [] },

        // Semestre 6
        { id: 'estagio-audio-clinica1', nome: 'Estágio Supervisionado em Audiologia Clínica I', semestre: 6, prerequisitos: ['audio-infantil', 'audio-adulto', 'reab-auditiva'] },
        { id: 'estagio-mo1', nome: 'Estágio Supervisionado em Motricidade Orofacial I', semestre: 6, prerequisitos: ['aval-interv-mo'] },
        { id: 'estagio-voz1', nome: 'Estágio Supervisionado em Voz I', semestre: 6, prerequisitos: ['aval-interv-disfonias'] },
        { id: 'estagio-ling-infantil1', nome: 'Estágio Supervisionado Linguagem Infantil I', semestre: 6, prerequisitos: ['aval-interv-ling-oral', 'aval-interv-ling-escrita'] },
        { id: 'proj-fono-escolar', nome: 'Projeto Integrador – Saúde fonoaudiológica no ambiente Escolar', semestre: 6, prerequisitos: [] },
        { id: 'topicos-especiais', nome: 'Tópicos Especiais', semestre: 6, prerequisitos: [] },

        // Semestre 7
        { id: 'estagio-audio-clinica2', nome: 'Estágio Supervisionado em Audiologia Clínica II', semestre: 7, prerequisitos: ['estagio-audio-clinica1'] },
        { id: 'estagio-mo2', nome: 'Estágio Supervisionado em Motricidade Orofacial II', semestre: 7, prerequisitos: ['estagio-mo1'] },
        { id: 'estagio-voz2', nome: 'Estágio Supervisionado em Voz II', semestre: 7, prerequisitos: ['estagio-voz1'] },
        { id: 'estagio-ling-infantil2', nome: 'Estágio Supervisionado Linguagem Infantil II', semestre: 7, prerequisitos: ['estagio-ling-infantil1'] },
        { id: 'estagio-fluencia1', nome: 'Estágio Supervisionado em Fluência e disfluência I', semestre: 7, prerequisitos: ['fluencia-disfluencia'] },
        { id: 'proj-saude-trabalhador', nome: 'Projeto integrador – Saúde do trabalhador e fonoaudiologia', semestre: 7, prerequisitos: [] },

        // Semestre 8
        { id: 'estagio-aasi', nome: 'Estágio Supervisionado AASI', semestre: 8, prerequisitos: ['estagio-audio-clinica2', 'hab-auditiva'] },
        { id: 'estagio-dist-neuro', nome: 'Estágio Supervisionado Distúrbios Neurológicos Adquiridos', semestre: 8, prerequisitos: ['dist-neuro-adq'] },
        { id: 'estagio-fluencia2', nome: 'Estágio Supervisionado em Fluência e disfluência II', semestre: 8, prerequisitos: ['estagio-fluencia1'] },
        { id: 'estagio-fono-escolar', nome: 'Estágio Supervisionado em Fonoaudiologia Escolar', semestre: 8, prerequisitos: ['proj-fono-escolar'] },
        { id: 'estagio-fono-hospitalar', nome: 'Estágio Supervisionado Fonoaudiologia Hospitalar', semestre: 8, prerequisitos: ['fono-hospitalar'] },
        { id: 'estagio-reab-auditiva', nome: 'Estágio Supervisionado Reabilitação Auditiva', semestre: 8, prerequisitos: ['reab-auditiva'] },
        { id: 'estagio-saude-coletiva', nome: 'Estágio Supervisionado Saúde Coletiva', semestre: 8, prerequisitos: ['politicas-saude', 'praticas-interprof'] },
        { id: 'tcc1', nome: 'Trabalho de Conclusão de Curso I', semestre: 8, prerequisitos: ['invest-cientifica'] },
        { id: 'proj-comunidades-sust', nome: 'Projeto integrador – Saúde em comunidades e sustentabilidade', semestre: 8, prerequisitos: [] },

        // Semestre 9 (Optativas / TCC Final)
        { id: 'tcc2', nome: 'Trabalho de Conclusão de Curso II', semestre: 9, prerequisitos: ['tcc1'] },
        { id: 'eletiva', nome: 'Eletiva', semestre: 9, prerequisitos: [] },
        { id: 'estagio-opt-audio', nome: 'Estágio Optativo em Audiologia Prática', semestre: 9, prerequisitos: ['estagio-audio-clinica2'] },
        { id: 'estagio-opt-tea', nome: 'Estágio Optativo em Transtorno do Espectro Autista', semestre: 9, prerequisitos: ['aval-interv-ling-oral'] },
        { id: 'ativ-complementares', nome: 'Atividades Complementares', semestre: 9, prerequisitos: [] }
    ];

    // Carrega o estado das disciplinas do Local Storage (se houver)
    function loadProgress() {
        const savedProgress = JSON.parse(localStorage.getItem('gradeProgress')) || {};
        disciplinas.forEach(disc => {
            if (savedProgress[disc.id] !== undefined) {
                disc.concluida = savedProgress[disc.id];
            }
        });
    }

    // Salva o estado das disciplinas no Local Storage
    function saveProgress() {
        const progress = {};
        disciplinas.forEach(disc => {
            progress[disc.id] = disc.concluida;
        });
        localStorage.setItem('gradeProgress', JSON.stringify(progress));
    }

    // Verifica se os pré-requisitos de uma disciplina foram cumpridos
    function arePrerequisitesMet(disciplineId) {
        const discipline = disciplinas.find(d => d.id === disciplineId);
        if (!discipline) return false;

        return discipline.prerequisitos.every(prereqId => {
            const prereqDiscipline = disciplinas.find(d => d.id === prereqId);
            return prereqDiscipline && prereqDiscipline.concluida;
        });
    }

    // Renderiza a grade curricular
    function renderGrade() {
        gradeCurricularDiv.innerHTML = ''; // Limpa o conteúdo existente

        const semestresAgrupados = disciplinas.reduce((acc, disc) => {
            if (!acc[disc.semestre]) {
                acc[disc.semestre] = [];
            }
            acc[disc.semestre].push(disc);
            return acc;
        }, {});

        Object.keys(semestresAgrupados).sort((a, b) => a - b).forEach(semestreNum => {
            const semestreDiv = document.createElement('div');
            semestreDiv.classList.add('semestre');
            semestreDiv.innerHTML = `<h2>Semestre ${semestreNum}</h2>`;

            semestresAgrupados[semestreNum].sort((a,b) => a.nome.localeCompare(b.nome)).forEach(disc => {
                const isBlocked = !arePrerequisitesMet(disc.id) && !disc.concluida; // Não está concluída e pré-requisitos não atendidos

                const disciplinaDiv = document.createElement('div');
                disciplinaDiv.classList.add('disciplina');
                if (disc.concluida) {
                    disciplinaDiv.classList.add('concluida');
                } else if (isBlocked) {
                    disciplinaDiv.classList.add('bloqueada');
                }

                disciplinaDiv.setAttribute('data-id', disc.id); // Para identificar a disciplina

                let prereqNames = disc.prerequisitos.map(id => {
                    const prereq = disciplinas.find(d => d.id === id);
                    return prereq ? prereq.nome : '';
                }).filter(name => name !== '');

                disciplinaDiv.innerHTML = `
                    <input type="checkbox" id="${disc.id}" ${disc.concluida ? 'checked' : ''} ${isBlocked ? 'disabled' : ''}>
                    <label for="${disc.id}">${disc.nome}</label>
                    ${prereqNames.length > 0 ? `<div class="prerequisitos">Pré-req: ${prereqNames.join(', ')}</div>` : ''}
                `;
                semestreDiv.appendChild(disciplinaDiv);
            });
            gradeCurricularDiv.appendChild(semestreDiv);
        });

        // Adiciona event listeners para os checkboxes
        document.querySelectorAll('.disciplina input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (event) => {
                const disciplineId = event.target.id;
                const discipline = disciplinas.find(d => d.id === disciplineId);
                if (discipline) {
                    discipline.concluida = event.target.checked;
                    saveProgress();
                    renderGrade(); // Renderiza novamente para atualizar estados de bloqueio/desbloqueio
                }
            });
        });
    }

    // Carrega o progresso e renderiza a grade ao iniciar
    loadProgress();
    renderGrade();
});
