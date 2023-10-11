jsx
import React, { Component } from 'react';
import '../../../static/css/home.min.css'

class Home extends Component {
    render() {
        return (
            <div className="main">
                <section className="grid_box inicio">
                    <div className="option_inicio">
                        <a href="">
                            <i className="bi bi-house"></i>
                            <p>Início</p>
                        </a>
                    </div>
                    <div className="option_procurar">
                        <a href="">
                            <i className="bi bi-search"></i>
                            <p>Procurar</p>
                        </a>
                    </div>
                </section>
                <section className="grid_box cards">
                    <div>
                    </div>
                </section>
                <section className="grid_box playlist">
                    <div className="title_playlist">
                        <div className="first_icons">
                            <a href="">
                                <i className="bi bi-collection-fill"></i>
                                <p>A tua Biblioteca</p>
                            </a>
                        </div>
                        <div className="second_icons">
                            <a href=""><i className="bi bi-plus"></i></a>
                            <a href=""><i className="bi bi-arrow-right-short"></i></a>
                        </div>
                    </div>
                    <div className="tags">
                        <div className="frame">
                            <div className="tags_box fade-on-hover">
                                <button className="fade-overflow" role="checkbox" aria-checked="false" tabindex="-1" style={{ willChange: 'transform, opacity' }}><span>Playlists</span></button>
                            </div>
                            <div className="tags_box fade-on-hover">
                                <button className="fade-overflow" role="checkbox" aria-checked="false" tabindex="-1" style={{ willChange: 'transform, opacity' }}><span>Artistas</span></button>
                            </div>
                            <div className="tags_box fade-on-hover">
                                <button className="fade-overflow" role="checkbox" aria-checked="false" tabindex="-1" style={{ willChange: 'transform, opacity' }}><span>Álbuns</span></button>
                            </div>
                            <div className="tags_box fade-on-hover">
                                <button className="fade-overflow" role="checkbox" aria-checked="false" tabindex="-1" style={{ willChange: 'transform, opacity' }}><span>Podcasts e Programas</span></button>
                            </div>
                            <div className="scroll_arrow left">
                                <i className="bi bi-arrow-left"></i>
                            </div>
                            <div className="scroll_arrow right">
                                <i className="bi bi-arrow-right"></i>
                            </div>
                            {/* <div className="scroll_bar"></div> */}
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </footer>
                <script src="{{ url_for('static', filename='js/arrow_tag.js') }}"></script>
            </div>
        );
    }
}

export default Home;