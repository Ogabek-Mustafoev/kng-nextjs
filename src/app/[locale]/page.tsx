'use server';

import {setRequestLocale} from 'next-intl/server';

import {IProps} from '@/types';
import Hero from '@/components/hero';
import OurProjects from '@/components/our-projects';

export default async function Home({params}: Readonly<IProps>) {
  const locale = (await params)?.locale;

  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <OurProjects />
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          ad, asperiores aspernatur blanditiis deserunt enim eum ex fugit illum,
          iure iusto modi nesciunt officiis omnis possimus, provident ratione
          reiciendis sit! A accusantium ad aliquam aperiam, autem, debitis
          distinctio dolores expedita facere fugit harum incidunt ipsa iure
          laborum maiores molestiae neque nihil quaerat qui quis quos rem
          sapiente similique unde voluptatibus? A at beatae consectetur deleniti
          deserunt dicta dignissimos, dolor dolores dolorum ducimus eaque error
          ex excepturi facilis fugit harum hic in laborum libero magni minima
          mollitia nihil nostrum numquam obcaecati pariatur perferendis placeat
          quaerat, quod quos reiciendis saepe sint soluta suscipit temporibus
          velit voluptas? Delectus ipsa nisi odio officiis, quas voluptates.
          Blanditiis, debitis fuga laboriosam minima nam neque quasi quisquam
          rerum temporibus unde vel, vero, voluptas. Alias esse fugiat
          necessitatibus sed ullam veniam? Ab accusamus at cum debitis delectus
          eaque ex hic id incidunt iure minima, molestiae nisi numquam obcaecati
          optio praesentium quasi repellendus sequi sint tempora totam ullam
          velit, veniam, voluptate voluptatem voluptates voluptatibus. Dolorum
          expedita numquam perferendis, porro quasi reiciendis. A aliquid animi
          asperiores aspernatur assumenda dicta distinctio doloribus, eaque est
          eveniet ex excepturi expedita id illo inventore ipsum libero minima
          molestias natus nesciunt non nostrum nulla pariatur quasi qui quidem
          quo quod quos ratione reiciendis repudiandae rerum sapiente sequi sit
          sunt suscipit vitae! A accusamus beatae exercitationem nobis optio
          provident quae quam sed sint totam? Alias aut corporis enim est ex
          labore magni quos voluptas. Accusamus amet aperiam cupiditate
          doloremque dolorum eligendi enim excepturi exercitationem, fugit id
          illo in iste iure iusto molestiae natus necessitatibus nisi quaerat,
          similique sit voluptates voluptatibus voluptatum! Cum cupiditate
          deserunt doloribus ex expedita illum inventore ipsam ipsum laudantium
          magni placeat, quae quas quidem, recusandae sapiente voluptas
          voluptatem. A culpa, cupiditate, distinctio eius excepturi expedita
          ipsa laboriosam laborum molestiae nam omnis perspiciatis provident qui
          quibusdam quos ratione sequi temporibus? Consequatur minima quae quo.
          A ad aliquam amet animi at, cum delectus dicta dolor doloribus, ea est
          ex fuga harum in laudantium magnam neque numquam obcaecati officiis
          omnis optio, perferendis quaerat quam quas quia quibusdam quo quod
          ratione sapiente soluta totam ut vitae voluptates. Corporis, expedita,
          sunt. A aut distinctio, ducimus, error fugiat fugit illum libero
          magnam nam numquam optio pariatur perspiciatis placeat quia
          repellendus velit voluptas. Blanditiis debitis doloremque dolorum
          earum exercitationem facere iste libero maiores minima nulla obcaecati
          porro, praesentium quo quod recusandae repellat reprehenderit, sint
          sit sunt tenetur vero, voluptas voluptatum. Amet consequatur earum ex
          exercitationem facere, maxime odio quia quis recusandae rem sapiente
          sequi, soluta, suscipit. Aliquid commodi cum ea incidunt itaque maxime
          obcaecati odit qui repudiandae unde! Ab accusamus atque consectetur
          corporis, cumque deserunt dicta eum ex impedit magnam minima
          molestiae, nobis officiis praesentium reprehenderit repudiandae rerum
          sed voluptate. Aliquam amet commodi cumque, debitis, deleniti deserunt
          dolor dolores et explicabo illum, incidunt ipsum iste magni maiores
          modi molestias nesciunt odit omnis possimus quisquam recusandae rem
          repellendus rerum sint tenetur ut vel veritatis voluptate voluptates
          voluptatibus? Aliquam at dicta exercitationem, harum id illum itaque
          labore modi molestias obcaecati odit quo ratione, recusandae sint
          tempora unde vitae? Enim inventore nesciunt non temporibus ullam! Ab
          atque delectus, dolore esse explicabo inventore iste mollitia numquam
          obcaecati praesentium quas quia rem sapiente similique sit veritatis
          voluptas? Cum doloribus eaque quaerat quis. Adipisci cupiditate
          doloribus eos excepturi magnam maxime porro quam! Accusantium aliquid
          corporis doloribus dolorum incidunt nesciunt repellat reprehenderit
          sed vel veniam? Consequatur dolore doloribus impedit, nihil numquam
          odit quae temporibus tenetur totam ut. Ab aliquam aliquid animi
          asperiores aspernatur autem cum, deserunt doloremque dolores doloribus
          harum hic illum iure libero magni, natus nemo nisi odit possimus qui
          quia quis ratione recusandae repudiandae sequi sit suscipit unde velit
          voluptate voluptatibus? Aliquam culpa facilis nam quod reprehenderit.
          Cum exercitationem illo impedit laudantium molestias quisquam ratione
          sunt. Asperiores consequatur consequuntur cumque explicabo fugiat id
          ipsam maxime, non quis sapiente. Ab culpa dignissimos, dolorem,
          exercitationem fugit impedit iste modi molestiae nam nemo officia
          possimus quis quo ratione saepe sed ullam vero? Assumenda fuga fugit
          iusto nobis, officia perferendis repudiandae sint! A alias architecto,
          asperiores at atque debitis dignissimos distinctio enim excepturi
          facere id inventore iure libero magnam nihil nisi nobis odio
          perferendis perspiciatis quaerat, quia quis quo repellat suscipit
          totam voluptates voluptatibus? A animi architecto asperiores
          aspernatur beatae dolorem doloremque enim eos et eveniet ex fuga,
          fugit harum inventore ipsa ipsam itaque laboriosam magni, minima
          necessitatibus neque nulla odit optio perspiciatis quas quo reiciendis
          rem reprehenderit ut vel veritatis vitae voluptate, voluptatum! Amet,
          blanditiis cum doloremque ea excepturi id illum itaque maxime minus
          molestiae molestias odio praesentium quibusdam recusandae repellat
          repellendus reprehenderit saepe veniam! Culpa cum delectus dolores, et
          fugit inventore minus quibusdam quisquam repudiandae sequi! Aut autem
          consequatur corporis cum delectus dolore, doloribus enim, error
          exercitationem fugit id illo molestiae nesciunt, officia omnis optio
          possimus quia quidem tempore velit! Fuga, molestias officia. Autem
          commodi dolor dolore et iste porro quisquam vel? Ab aliquid
          aspernatur, consequuntur cupiditate deleniti dignissimos doloremque
          eligendi expedita fugit harum illum impedit magni maxime molestiae nam
          nulla omnis quam quia quisquam sequi sint soluta suscipit vitae
          voluptatem voluptatibus! Corporis, cupiditate explicabo, ipsa labore
          maxime officia perferendis quod repellat sapiente suscipit tenetur
          voluptatem? Aspernatur aut beatae doloremque exercitationem facere,
          hic impedit ipsa maxime mollitia neque provident quaerat quo sapiente
          sunt tempore, totam unde! Accusamus aliquid amet architecto aspernatur
          aut beatae consequuntur, dolorum eius molestias quidem quis repellat
          vel. Ab accusamus ad adipisci dignissimos dolore enim et, expedita
          facilis fugiat ipsum labore modi, non numquam odio quae quaerat
          recusandae similique temporibus, totam voluptatibus. Aliquam eum iste
          iusto laboriosam neque non, porro reprehenderit velit vitae
          voluptatem! Autem dolorem ea in ipsum iste, itaque iusto laboriosam
          minus nobis officiis quam qui recusandae repellendus, sequi suscipit
          tempora, vitae voluptatem! Ad aliquam aliquid assumenda aut autem
          beatae blanditiis consequuntur cupiditate deleniti dignissimos
          distinctio dolor ea enim esse facilis fuga fugiat hic impedit labore
          laudantium magni, maiores, minus modi nam odio optio quaerat quibusdam
          quis, quo repellendus reprehenderit sit voluptate voluptatibus?
          Accusamus consequuntur dolor, doloribus facilis itaque minus nulla
          numquam perspiciatis possimus praesentium quas, quibusdam, repellendus
          ullam vel veniam? Quas.
        </p>
      </div>
    </>
  );
}
