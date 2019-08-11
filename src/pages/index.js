import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address}
            · <i className="fab fa-whatsapp"></i> 
            {config.phone}
            ·         
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-0">
            Professor no <a href="https://www.ifg.edu.br/">Instituto Federal de Educação, Ciência e Tecnologia de Goiás</a> (campus Goiânia) desde Agosto de 2013.
            Com passagens e projetos desenvolvidos em várias universidades como 
            <a href="https://www.ufg.br/">UFG</a>, 
            <a href="https://www2.ufscar.br/">UFSCar</a>, 
            <a href="https://www.unb.br/">UnB</a>, 
            <a href="https://www.ufpe.br/">UFPE</a>, 
            <a href="https://www5.usp.br/">USP</a> e 
            <a href="http://www.ufc.br/">UFC</a>.
          </p>
          <p className="lead mb-5">
            Se precisar de ajuda em suas análises estatísticas, pode contar comigo, ficarei feliz em ajudar.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiência</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Professor Efetivo</h3>
              <div className="subheading mb-3">Instituto Federal de Educação, Ciência e Teconoligia de Goiás</div>
              <p>
                Ministrei as seguintes disciplinas para os cursos Técnicos, Licenciaturas e Bacharelados:
              </p>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-book-open"></i>
                  DPAA-2.096.1 - Matemática III
                </li>
                <li>
                  <i className="fa-li fa fa-book-open"></i>
                  DPAA-2.082 - Estudos de Funções
                </li>
                <li>
                  <i className="fa-li fa fa-book-open"></i>
                  DPAA-4.314 - Matemática Discreta
                </li>
                <li>
                  <i className="fa-li fa fa-book-open"></i>
                  DPAA-2.087 - Geometria Analítica e Cálculo Vetorial
                </li>
                <li>
                  <i className="fa-li fa fa-book-open"></i>
                  DPAA-2.339 - Estatística e Probabilidade
                </li>
                <li>
                  <i className="fa-li fa fa-book-open"></i>
                  DPAA-2.124 - Estatística com Informática
                </li>
                <li>
                  <i className="fa-li fa fa-book-open"></i>
                  DPAA-2.018 - Matemática I
                </li>
                <li>
                  <i className="fa-li fa fa-book-open"></i>
                  10321.4 - Geometria Analítica
                </li>
              </ul>              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Agosto 2013 - Presente</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Professor Substituto</h3>
              <div className="subheading mb-3">Universidade Federal de Goiás</div>
              <p>
                Ministrei disciplinas para os cursos de Matemática, Física, Química, Agronomia e Zootecnia.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2010 - Janeiro 2012</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Curso de LaTeX</h3>
              <div className="subheading mb-3">Instituto Federal de Educação, Ciência e Teconoligia de Goiás</div>
              <p>
              Prática Profissional: Treinamento de LaTeX oferecido aos alunos da Licenciatura em Matemática do IFG.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Projeto Lagoa do Sino</h3>
              <div className="subheading mb-3">Universidade Federal de São Carlos</div>
              <p>
                Projeto de Extenção: Construindo pontes institucionais para a implantação participativa do Campus UFSCar da Lagoa do Sino.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Setembro 2012</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Previsão Esportiva</h3>
              <div className="subheading mb-3">Universidade Federal de São Carlos</div>
              <p>
                Projeto de Extenção: Manutenção do site de modelagem Esportiva <a href="http://www.previsaoesportiva.com.br" >Previsão Esportiva</a>.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Agosto 2012 - Março 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Centro de Estudos do Risco</h3>
              <div className="subheading mb-3">Universidade Federal de São Carlos / Universidade de São Paulo</div>
              <p>
              <a href="http://www.cer.ufscar.br" >CER</a>: Laboratório de pesquisa do Departamento de Estatística da UFSCar em parceria com o Instituto de Ciências Matemáticas e de Computação da Universidade de São Paulo (ICMC-USP).
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Agosto 2012 - Março 2013</span>
            </div>
          </div>

         </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Educação</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Universidade Federal de Pernambuco</h3>
              <div className="subheading mb-1">Doutorado em Estatística</div>
              <div>Tese: Inference, information theory and segmentation based on an extensed Cauchy-Rayleigh Distribution - Aplications to heavy-tailed data</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2015 - Fevereiro 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Universidade de Brasília</h3>
              <div className="subheading mb-1">Mestrado em Estatística</div>
              <div>Dissertação: <a href="http://repositorio.unb.br/handle/10482/17804">Medidas de memória longa em séries temporais - Comparação de métodos de estimação do coeficiente de Hurst</a></div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2013 - Dezembro 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Universidade Federal de São Carlos</h3>
              <div className="subheading mb-1">Graduação em Estatística - Interrompida</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2012 - Junho 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Universidade Federal de Goiás</h3>
              <div className="subheading mb-1">Especialização em Matemática Aplicada</div>
              <div>Artigo: <a href="http://matematicajatai.com/rematFiles/3-2013/haskell.pdf">Haskell, uma linguagem de programação ideal para matemáticos</a></div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2010 - Outubro 2011</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Universidade Federal de Goiás</h3>
              <div className="subheading mb-1">Licenciatura Plena em Matemática</div>
              <div>Monografia: Uma experiência com o ensino de perímetros e áreas pela Resolução de Problemas</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2004 - Dezembro 2007</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Habilidades</h2>

          <div className="subheading mb-3">
            Linguagens de Programação &amp; Ferramentas
          </div>

          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-star"></i> R  &amp; RStudio
            </li>
            <li>
              <i className="fa-li fa fa-star"></i> HTML  &amp; CSS
            </li>
            <li>
              <i className="fa-li fa fa-star"></i> shell script  &amp; linux
            </li>
            <li>
              <i className="fa-li fa fa-star"></i> LaTeX
            </li>
            <li>
              <i className="fa-li fa fa-star"></i> vim
            </li>
          </ul>
        </div>        
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-3">Interesses</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Inferência estatística
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Probabilidade
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Análise multivariada
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Machine learning
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Estatística aplicada em geral
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="talks"
      >
        <div className="w-100">
          <h2 className="mb-5">Palestras, Apresentações e Minicursos</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Minicurso - R - Maio 2019
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Palestra - O uso de funções especiais em probabilidade - Abril 2019
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Minicurso - Praticando LaTeX - Novembro 2014
            </li>
          </ul>
        </div>
      </section>

      {/* <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="learners"
      >
        <div className="w-100">
          <h2 className="mb-5">Orientandos</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section> */}

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Certificações &amp; Prêmios</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              2013 - Bolsa de Mestrado Capes
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              2012 - Bolsa Jovens Talentos para Ciência
            </li>
            <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
              2003 - Menção Honrosa na Olimpíada Brasileira de Física
            </li>
          </ul>
        </div>
      </section>

    </div>
  </Layout>
);

export default IndexPage;