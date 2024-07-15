// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from './Banner';
import Item from './Item';

const Body = () => {
    const items = [
        { icon: 'bi-collection', title: 'Fresh new layout', description: 'With Bootstrap 5, we\'ve created a fresh new layout for this template!' },
        { icon: 'bi-cloud-download', title: 'Free to download', description: 'As always, Start Bootstrap has a powerful collection of free templates.' },
        { icon: 'bi-card-heading', title: 'Jumbotron hero header', description: 'The heroic part of this template is the jumbotron hero header!' },
        { icon: 'bi-bootstrap', title: 'Feature boxes', description: 'We\'ve created some custom feature boxes using Bootstrap icons!' },
        { icon: 'bi-code', title: 'Simple clean code', description: 'We keep our dependencies up to date and squash bugs as they come!' },
        { icon: 'bi-patch-check', title: 'A name you trust', description: 'Start Bootstrap has been the leader in free Bootstrap templates since 2013!' },
    ];

    return (
        <main>
            <header className="py-5">
                <Banner />
            </header>
            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        {items.map((item, index) => (
                            <Item key={index} icon={item.icon} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Body;
