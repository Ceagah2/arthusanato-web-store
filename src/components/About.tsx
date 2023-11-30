import styled from "styled-components";
import {theme} from '../theme'
import { IAbout, THeaderImage } from "../types";

export const About = (props: IAbout) => {
  const {image, title, id} = props
  return(
    <AboutContainer id={id}>
        <AboutImage image={image}/>
        <AboutTextContainer>
          <AboutTitle>{title}</AboutTitle>
          <AboutText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem blanditiis natus tempora excepturi voluptatibus asperiores atque et sunt alias, accusamus laborum id harum consequatur nobis. Fuga nihil ipsum placeat!
          Voluptatem dicta officiis ut sequi. Accusamus ullam fugiat, alias cum excepturi nulla porro modi nostrum laboriosam consequuntur labore distinctio inventore. Deserunt tenetur iste magni consequuntur quas deleniti illum neque. Voluptatum!
          A error ipsum sunt cum eius eveniet, accusantium pariatur possimus, sint aut quasi. Sunt ab aspernatur voluptatibus inventore veniam repellat maiores reprehenderit perferendis voluptatum asperiores eos molestias, quod accusantium in!
          Doloremque repellat dicta beatae eveniet, exercitationem ea obcaecati quam voluptates, velit vero ad dignissimos alias consequuntur recusandae quaerat? Animi voluptatem eveniet non soluta impedit doloribus necessitatibus reprehenderit accusamus possimus exercitationem!
          Quod illum cupiditate quibusdam nesciunt, iure sint. Possimus magnam ea, ad rem voluptatibus, deleniti aspernatur velit ex placeat tempore autem eum repellat quis inventore vitae consectetur numquam? Exercitationem, deserunt consequuntur!
          Tenetur rerum facilis hic quia dolore iste, deleniti eum amet facere? Corporis unde molestiae eligendi eos eius at repudiandae quo, minima architecto doloribus accusamus dolorem, ipsam quas! Autem, assumenda alias.
          Magnam quidem ipsam iste nemo deleniti vel voluptas consequatur fugiat veniam? Nam minus inventore consequuntur blanditiis est iste distinctio aut molestiae officia qui! Commodi quis, velit blanditiis expedita est laborum!
          Totam obcaecati impedit incidunt aliquid iure reprehenderit autem cupiditate. Quasi, culpa? Distinctio fuga nesciunt placeat repudiandae, nam hic ullam ut nisi qui beatae! Earum sint, et consectetur ullam corporis aperiam?
          Repudiandae aperiam id fugit autem suscipit exercitationem nesciunt at assumenda voluptate, ipsum accusamus dicta, excepturi mollitia, molestias aliquid placeat ad sapiente officiis culpa necessitatibus maiores veritatis. Veritatis corporis dolorem necessitatibus.
          Cum harum consectetur totam vel rerum ab, sequi alias voluptatibus voluptas fuga repellat est sed nisi consequatur odit laudantium aut blanditiis officiis! Mollitia porro eligendi voluptate deserunt doloribus impedit minima?
          Cupiditate, quas explicabo? Ea eaque natus minima nobis. Sed, earum provident, eligendi quam et, voluptatum perspiciatis perferendis harum libero laboriosam illum error quaerat temporibus culpa assumenda sapiente! Accusantium, eveniet. Non.
          Error, quibusdam similique pariatur deserunt rerum, voluptatem consectetur sunt illo voluptatibus dolore ullam dignissimos maiores velit omnis quisquam odio a est harum quae repudiandae officia iure, quasi amet! Similique, iste.
          Maiores dolorem delectus commodi rerum consectetur iste tenetur mollitia doloremque impedit, esse animi itaque ea ipsa officia sint aut praesentium nisi culpa reiciendis laboriosam? Consequatur odio reprehenderit autem iure quisquam.
          Veritatis esse obcaecati eveniet quam, magni maxime, est doloribus eaque provident facere laudantium. Ex id vitae, repellendus dolores nobis harum voluptates nam distinctio laboriosam eum ad dolor perferendis, doloribus earum?
          Atque neque commodi quae optio voluptate, pariatur suscipit velit praesentium ratione vitae tempore facere ipsum dolore, veniam necessitatibus hic odit! Fuga, dicta. Esse reiciendis nulla laborum aut error, voluptates id.
          Expedita minus modi accusamus dolor. Aut blanditiis repellat quo ea laudantium voluptate aperiam, enim expedita natus maxime, quos placeat dicta exercitationem itaque iusto earum veniam facilis, at a adipisci maiores.
          Ipsa maxime ab obcaecati eveniet ratione ullam quam? Eius ex, beatae voluptate libero illum similique iure reprehenderit fuga quisquam quod? Corrupti eaque quae adipisci mollitia magni illum doloribus magnam expedita!
          Ullam, quae eius aliquam illo soluta laudantium adipisci similique iusto iste voluptatibus officiis rerum excepturi ipsam laborum, cupiditate autem magnam veniam fugiat assumenda at, obcaecati minima porro pariatur repellendus. Unde?
          Amet atque laborum rerum dolore quibusdam doloremque cupiditate consectetur ipsum impedit, ducimus facere harum aliquam iure eum commodi tempora voluptatum animi possimus aspernatur voluptas esse illum explicabo. Quibusdam, perferendis animi!
          Obcaecati quam facilis praesentium corporis aut, provident assumenda! Illo dolor tempore itaque doloremque eos voluptate dignissimos voluptas labore non, quisquam dolore cumque assumenda, nulla asperiores suscipit quod officia reprehenderit nam.</AboutText>
        </AboutTextContainer>
    </AboutContainer>
  )
}


export const AboutContainer = styled.section`
  width: 100%;
  height: 600px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const AboutImage = styled.div<THeaderImage>`
  width: 30%;
  background-image: url(${(props) => props.image ?? ''});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${theme.colors.brown};
  margin-left: 20px;
`
export const AboutTextContainer = styled.div`
  flex: 1;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const AboutTitle = styled.h1`
  font-size: ${theme.fontSizes.heading};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.brown};
  margin-bottom: 20px;
`
export const AboutText = styled.p`
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.brown};
  text-align: justify;
  padding: 10px;
`