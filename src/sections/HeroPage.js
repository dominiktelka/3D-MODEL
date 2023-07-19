import React from "react";
import styled from "styled-components";


const Title = styled.p`
  text-align: center;
  overflow-wrap: break-word;
`
const CameraBox = styled.div`
  width:87px;
  border-radius:0 0 13px 13px;
  height: 20px;
  background-color: black ;
  position: absolute;
  top:0;
  left:31%;
  z-index:1;
`


export default function Example() {
    return (
        <div>
            <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida quam nec lacus tristique, ut blandit neque sagittis. Vestibulum faucibus mauris ex, in maximus est gravida tincidunt. Cras tincidunt ornare metus ac vulputate. Mauris vehicula odio ac neque accumsan sollicitudin. Phasellus quis nulla eget nulla sagittis vehicula volutpat vel purus. Nunc facilisis ante sed mi ultricies placerat. Pellentesque scelerisque nunc in augue suscipit, sit amet ornare elit egestas. Proin vel dignissim orci, vitae gravida libero. Praesent mattis commodo egestas. Etiam mattis lorem nisl, non molestie urna eleifend id. Curabitur nec ipsum pretium, sagittis mi a, tincidunt dui. Nullam ut dictum nulla. Donec at sagittis nibh. Pellentesque iaculis, ligula et molestie tristique, nisi leo maximus felis, eget sollicitudin eros lacus in augue. Praesent vitae placerat ex.

                Ut commodo a lacus eget aliquam. Sed sodales urna non ante sodales pretium. Donec non dui neque. Maecenas vel consectetur augue, ac lacinia tellus. Morbi rutrum gravida viverra. Ut eu leo mattis, mollis nisl eu, blandit purus. Proin quam ante, posuere vitae maximus a, elementum eget quam.

                In non nisi mi. Morbi luctus eros dolor, a iaculis turpis sollicitudin in. Mauris faucibus elit sed massa imperdiet tincidunt. Fusce diam enim, aliquam sit amet augue sed, tempus condimentum tellus. Aenean in purus sit amet nibh dignissim mattis non in nisl. Donec condimentum diam at quam lacinia, id rutrum urna consequat. Curabitur scelerisque odio dui, sed eleifend magna posuere eget. Maecenas non tellus diam. Suspendisse a imperdiet lacus. Nulla quis purus a nibh rhoncus pharetra. Fusce pellentesque consectetur enim. Pellentesque a finibus odio, eu pellentesque nibh. Maecenas ultricies libero sed fermentum aliquam.

                Aenean maximus vel magna id luctus. Aliquam vulputate vulputate augue quis egestas. Proin felis sem, molestie sed sapien sit amet, condimentum blandit nibh. Etiam commodo ex libero, vel ornare ante luctus at. Pellentesque vulputate sapien non diam imperdiet, ut fermentum justo eleifend. Sed non metus sed lectus ornare sodales sodales vestibulum nibh. In hac habitasse platea dictumst. Morbi metus nunc, commodo eu sollicitudin nec, efficitur vel risus. Vestibulum pretium feugiat turpis, in fermentum felis faucibus id. Nulla vel urna sed leo gravida maximus.

                Aenean urna nunc, gravida at erat quis, ultricies placerat sem. Sed condimentum, odio vel dapibus lobortis, ipsum nisl tincidunt libero, vitae ornare leo massa at eros. Suspendisse eget orci sed dolor auctor dapibus. Donec tincidunt sollicitudin velit laoreet mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris magna, egestas ac est ut, blandit feugiat est. Etiam tempor, arcu non fermentum tristique, lorem risus posuere lectus, nec egestas lectus metus id orci. Mauris lacinia est vehicula interdum ultricies. Fusce quis sapien volutpat, dignissim urna vel, vehicula felis. Maecenas accumsan venenatis mi, non condimentum ipsum semper et.</Title>
            <CameraBox></CameraBox>
        </div>
    )
}