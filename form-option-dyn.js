// Forms conditions
var lookup = {
   // Form condition
   'Especialidade': ['Instituição'],
   'Anatomia Patológica': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Anestesiologia': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Cirurgia Geral': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Dermatologia': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Endocrinologia': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Gastrenterologia': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Medicina Geral e Familiar': ['Selecione a Instituição*', 'ACES Alentejo Central', 'ACES Alentejo Litoral (Unidade Local de Saúde do Litoral Alentejo, EPE)', 'ACES Algarve I - Central', 'ACES Algarve II - Barlavento', 'ACES Algarve III - Sotavento', 'ACES Almada-Seixal', 'ACES Alto Ave - Guimarães/Vizela/Terras de Basto', 'ACES Alto Minho ()Unidade Local de Saúde do Alto Minho, EPE)', 'ACES Alto Trás-os-Montes I - Nordeste (Unidade Local de Saúde do Nordeste, EPE)', 'ACES Amadora', 'ACES Arco Ribeirinho', 'ACES Arrábida', 'ACES Ave - Famalicão', 'ACES Baixo Alentejo (Unidade Local de Saúde do Baixo Alentejo, EPE)', 'ACES Baixo Mondego', 'ACES Baixo Vouga', 'ACES Beira Interior Sul (Unidade Local de Súude de Castelo Branco, EPE)', 'ACES Cascais', 'ACES Cova da Beira', 'ACES Cávado I - Braga', 'ACES Cávado II - Gerês/Cabreira', 'ACES Cávado III - Barcelos/Esposende', 'ACES Douro I - Marão e Douro Norte', 'ACES Douro II - Douro Sul', 'ACES Dão Lafões', 'ACES Entre Douro e Vouga I - Feira/Arouca', 'ACES Entre Douro e Vouga II - Aveiro Norte', 'ACES Estuário do Tejo', 'ACES Grande Porto I - Santo Tirso/Trofa', 'ACES Grande Porto II - Gondomar', 'ACES Grande Porto III - Maia/Valongo', 'ACES Grande Porto IV - Póvoa do Varzim/Vila do Conde', 'ACES Grande Porto V - Porto Ocidental', 'ACES Grande Porto VI - Porto Oriental', 'ACES Grande Porto VII - Gaia', 'ACES Grande Porto VIII - Espinho/Gaia', 'ACES Guarda (Unidade Local de Saúde de Guarda, EPE)', 'ACES Ilha Graciosa', 'ACES Ilha de Terceira', 'ACES Ilha das Flores', 'ACES Ilha de Santa Maria', 'ACES Ilha de São Jorge', 'ACES Ilha de São Miguel', 'ACES Ilha do Corvo', 'ACES Ilha do Faial', 'ACES Ilha do Pico', 'ACES Lezíria', 'ACES Lisboa Central', 'ACES Lisboa Norte', 'ACES Lisboa Ocidental e Oeiras', 'ACES Loures - Odivelas', 'ACES Matosinhos (Unidade Local de Saúde de Matosinhos, EPE)', 'ACES Médio Tejo', 'ACES Oeste I - Oeste Norte', 'ACES Oeste Sul', 'ACES Pinhal Interior Norte', 'ACES Pinhal Interior Sul (Unidade Local de Saúde de Castelo Branco, EPE)', 'ACES Pinhal Litoral', 'ACES Sintra', 'ACES Trás-os-Montes - Alto Tâmega e Barroso', 'ACES Tâmega I - Baixo Tâmega', 'ACES Tâmega II - Vale so Sousa Sul', 'ACES Tâmega III - Vale do Sousa Norte', 'ACES de São Mamede (Unidade Local de Saúde do Norte Alentejo, EPE)'],
   'Medicina Intensiva': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Medicina Interna': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Nefrologia': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Neurocirurgia': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Neurorradiologia': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Oncologia': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Ortopedia': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Otorrinolaringologia': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],
   'Pediatria': ['Selecione a Instituição*', 'CH Algarve (Faro)', 'CH Algarve (Portimão)', 'CH Baixo Vouga', 'CH Barreiro Montijo', 'CH Cova da Beira', 'CH Entre-Douro e Vouga', 'CH Leiria', 'CH Lisboa Ocidental', 'CH Médio Ave', 'CH Médio Tejo', 'CH Oeste', 'CH Póvoa do Varzim/Vila do Conde', 'CH Setúbal', 'CH Tondela - Viseu', 'CH Trás-os-Montes e Alto Douro', 'CH Tâmega e Sousa', 'CH Vila Nova de Gaia/Espinho', 'CHU Coimbra', 'CHU Lisboa Central', 'CHU Lisboa Norte', 'CHU Porto', 'CHU São João', 'Fundação Champalimaud', 'H Beatriz Ângelo', 'H Braga', 'H Cascais', 'H CUF Descobertas', 'H CUF Porto', 'H Distrital Santarém', 'H Divino Espírito Santo (Ponta Delgada)', 'H Espírito Santo (Évora)', 'H Fernando Fonseca', 'H Figueira da Foz', 'H Garcia de Orta', 'H Horta', 'H Luz Lisboa', 'H Santo Espírito (Angra)', 'H Senhora da Oliveira (Guimarães)', 'H Vila Franca de Xira', 'IPO Porto', 'IPO Coimbra', 'IPO Lisboa', 'SESARAM', 'ULS Alto Minho', 'ULS Baixo Alentejo', 'ULS Castelo Branco', 'ULS Guarda', 'ULS Litoral Alentejo', 'ULS Matosinhos', 'ULS Nordeste', 'ULS Norte Alentejo'],

};

// When an option is changed, search the above for matching choices
$('#especialidade').on('change', function() {
   // Set selected option as variable
   var selectValue = $(this).val();
   // Empty the target field
   $('#instituicao').empty(); 
   // For each chocie in the selected option
   for (i = 0; i < lookup[selectValue].length; i++) {
      // Output choice in the target field
      $('#instituicao').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
   }
});
