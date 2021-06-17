import React from 'react';

function Contact() {
  const DATA_NETWORK = [
    {
      id: '1',
      name: 'github',
      link: 'github.com/newiclus'
    },
    {
      id: '2',
      name: 'linkedin',
      link: 'linkedin.com/in/tecnicazorro'
    },
    {
      id: '3',
      name: 'email',
      link: 'job.newiclus@gmail.com'
    }
  ];

  return (
    <nav className="contact">
      <ul>
        {DATA_NETWORK.map((item) => {
          let link = `https://${item.link}`
          if (item.name === 'email') {
            link = `mailto:${item.link}`;
          }

          return (
            <li className="contact__item" key={`${item.id}-${item.name}`}>
              <span className={`contact__icon icon--${item.name}`}></span>
              <a href={link} target="_blank" rel="noreferrer">
                {item.link}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export {
  Contact
};
