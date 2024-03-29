import React from 'react'
import Nav from "../components/Nav/Navbar"
import Leaderboard from "../components/leaderboard/Leaderboard"
import "./Dashboard.scss"
import Card from '../components/card/Card';
import Company from '../Company/Company';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Nav/>
      <div className="body">
        <div className="leftSide">
          <div className="topDashboard">
         <div className="userCard">
          <div className="left">
            <img className='image' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABUFBMVEX///8eeB5+wVdOzPKWVABNzPR/wVRMzPaXUgAAcAB/wVeVVACAwUyXUQB/wU9MzPeZTQCRSQAAcgCYTwAbdQBAtLuRSAAAbQCTTwBSy+pK0fpOzfCAwUhJzv9Uy99cycgVdRV0xH13w3F8wl95wmZvxJRmx69VyuJpxqZcycxiyL12w3VaytVqpKiJcU7Ms5vs8+xim2Fto22lxaSZvZmxzLHB18E6iy4pgCRxxYw2dBluYwxwtU7HqopzxIJnx63u59tavNOJaz7d6N0ygjJNkU1QkVB6rHs5gzqMtozn8ObM3s2txKw5kEk4oIg3rKg1o5YtkGhgrE9GkzR+eDhKnIhBu82jdES5jGOAhXjcybV3lJGUWBWCfWJetcdNpmyiai+ndTllsVtYuJFun6DVw6y6lXOPYzB5j4Hm3MyMZjawgFGJcEiGeF1zloyvhVMKJNuXAAATv0lEQVR4nO1d+1/a6JdWcgVCAjJfJCSEcAkExFartbJrES+ttu7M7Lfu9mKta79bbWs77f//2573TQK5E1TE6ebpfGaKE8j75JzznOe8Ce3cXIwYMWLEiBEjRowYMWLEiBEjRowYMWLEiBEjRowYMWLEiBEjRowYMWLEiBHj/x329vZWZr2GaWJtX00m55+t/aokV54tqvMANbmw/ktyPNrH/DCS+49nvZzbx4Y6Ioji+Pxo1iu6ZWws2AkaHDd+pVw9Wpj3AOrx4JfheKSqXoaAhcO/BcWV9WeHh48eh6x1ZdOfIMTx70BxLYlKTE0urm4EHXIYRBBU9fm9p/hicVRXh/69/MCnCEeJ+uiuVzwh1hZtq1WTm2veQzaSIQTn5xfX737VE2Bv0bXe5OGe65CXASozohiY3fcBzzyrVxdcduX5GILz6rz7otwjrPtV2KIjU9fcUfaheH8Fdc9fQpK2KO6NiyB+w/PZcQjHfsDykyPPOTZHjTcczJBFCF4EdQH10DrEN439KL6YJZG5l2sHL3wmAT+vaWLBjMlReKOwv2OGFF8+WlxILi7aGvPR+ou1l6FOxewAK1H5oXfcJcWVo8ePN6z9lMdmO0tajfnoOTBOJvcCc9QABH0lWhGaSN6duVmbXwQGC/vPX6z9x/qzIQ9142h9ff3g0Bj01P3w9arzj9bCguxH8fCOhuLHi+bCVHVhIWlbJIpccmhQxvZxNTkZQXjL4vM7sTdBLeAuoC4eogqfLkIU8k44JucPpmziHs0whAaSC4+mGceVmRMEJJNT3GyMakKmCzU5PcmZpc7YoO5PK1HXI9usKUOd0rgxYyG1YzoWZ29sH79DJFdvfy5+7N55ny1U9SaKerR2sLp64BCsvdX7UoNDLD66bhg3ni8sgsNMJp+NvO7auC2xWSC5f72u8WLoidUFU5RXHt0fjbFDvcbw/3Jlw7b7pa5ubLycW1lX712GWlg0BWdl4wXU1fgb5DCzObMRJqSF1f2JB507RHIfDdMHMLxBXS3M+2yq27HqS+U+VqAN6sLa3qaVY+piKMXV+1lsY5G0r1vdOAp0dBvjt5//DlhYSB4GSOzq/c7GCRCUq78MQcCib6b+Sgz9d5An2r6851BX/Rjeo9noxgi4l3Pw6wRR9d2Qe/zrxFD1nY/vxTbabcH3EY4xz0T8zZD0eYQj0kahqv6GcP/Dre57x4zHY2IIU4e6+fsff75+/Y///Of+vSfp85DKSvgMsfnHK5qmE6mG1ukqotBt8IlEKrH16snwgM3pL9sfvgtf8DFu5lO6Rh6OAD/cPH61xXe7PJ1IJGiek2Wu2hZ6XAKB3np1DHi1BfQR3buftdT93/cRzFfqb/+GsOh3t3Hlv/4d8N9//vkPG15Xt7aAB3BR2gkOgoh58Zwm6FwKv0jBD1PAL4FeAt+7jKU6/+RYbkmiHa/zLMtm3vj1i7m3WZbNfipRdpQ13iBF1xWm0udwIAGyVq7w1oshUohuYuuOSG4eb8H1TRF4oYSJ0lmWJMniW1+GD3MkmXlXIuwQmpy5eprWuoKoJ0xaXI+RtDrP2cDTJmP6+A7YvdpKoMtJVwXHgkvL2TRJ5p76MjwBhuyukyHTla0AQQnWmoSomaHja92y1O40O51OE2Nb79d5OoUvxvEUy1HdfILZGeB1B0Oq9B7FsPDQl+EAGJKnooMh0eJtWUhz9U5Zqcom415XKBuAJIF/Q4hlHktu6lXgg783IgcdC1LTqHkDXMcZQ+JDHljkTnwZzp2yJJk9oxxvEBqOYkvJtVa5UueNUMmJqqZrvVodfk/X+x2xrPRqtUadhpz9nync5jh+BScascMMW47lUtIVkCDzA3+G34rA8JOrEHv2ICJeiU5Z1GjeSl2AUX80zfH9iiSUBUqp6FWl9Ycrjk+e3EiCnmwlnOTwSRuSMyI7UIUkmfYnOPe0AFLzwcWww7k+NMX1CEHRUJwQPxrlJQYPTYOrL2l6R6GAZqtOm7mqojaJs+v6ybu55SZnlGHfSZDCUsqeBzD8CgzZz5IzrxXe+7H1CiMQ7W2t30PoV6tL/V51qVYHtkiQeD7R10UJdAc1yFdb0EMMaYArcnwtw6c+8eUHSdp0Sen7kGYBPR8FOLvjSuyGu+vBSuWlCiGYKA8hKJ2Glb1cTVR6CQ4HOIU7Jc8lalpHeX2d+nzlXYN5ni7jZPhXBgmNv5QCPqJCfO9KU80bRORqGlpFESVJbHUrzaau682OAqSlHmeyouvbkgT12ADhgbZJL+mVFiUwRLl1OCm/4y1P/VkEG4QzSyVchoWvQQyfoo74wNURK34McXukTaeK1AZI8HWtTZW7eq/frzYSMifTWlukBIERK030G4phBEGs6P+aJIhgzAL5wYXWnEkqnaF+TxYGQQy/oo6YdRYiJdYDUgQlH/o1WgAv17UuhTNWUpp6VZblGvyAoBgKCFKttl7joWNugaiqkTy6+ts//0UHE0zIbWcIS+9RNySDhAYKEXfE5TH9IgwQ0Xpf3+50RQl8QLejiAywY8pMCxK2DsmKD6Lpnvj6f22zVxDB318LS6FndyVpCXfDQKEBvIVCzDv7BcW05bBz+JDEoVPg3AwEjhLKImZn9+kpviVIIK9bofl5vFWjhFqQyCRQryg7CBIiDmGAZ8O4QGmadhk3IShNfZCCtt/QKyLSFInANag1UiNTPrwMVYGCiZO2zSHH0C1tBMG/gACLQjXk5FzFFcJPiGE6Fyg0YE1xv3CnqR49TYFeF48yFHRMpaPVeM4zYxmL0wWhjfLVGCjxJJRIGHm7+QTZgxTyT2JYltJ1p6GhSn8hhsXgMgS8KXptDdVy25ogpHhNYuCkEsW0Or2aqbYB16LDCF08AG1tYTOdwIZ6C79KGaM2XSOIkNOBkjoZttLjyhDStOCTpuXIWtMwdZjRZDmEHb4aXBvqxjdCo8FBL1dCri7XdSXpMjI0ZO4ijCGeoNzum+lGDCLdN9sTRVRgWPRuAjgO5togs1rIR/N1kQoRGoiwi+EDZGjIzCCMIbY1md2S863EUlStaVkdmBHEblOrgfJwhm3zWSFfEQiqyQW1Ww4GtWZYCF2jIbWDlbTov0fjTNPsjsuxh+WKY9EN5FcZ/G5kYQgJPF2vluCNTQ4XlxTXLBNC092M0HEwe9Y7UjnATxmH1V0zQumHkaT+OxgjYDV17daEdyXHaWUYhLvIq5mbQ6jdlykwr9tar4osKs8bxhUfLmsU4YwTzCWNOqAPQsQ05ZDTytuuEJawzqSDLZuJS7+WyFQid300CNeXdKCJozkkiiZjw6frWn+pUYe4yhwva3BIz9qlBH7VjrEpCEZPCqvRRMLVKiydYU/HEMRDokdrCCpyJRoskcjU+sBTQUO/QDBYFJDNQfYb/isq3XYHJsxah6FapvDSMphYZIOAniBUaqEKLjddU4UxOI1PUqMleuZgKqqcunjKfL2xpIFPbcEVh2ESu1SGgEpl0C/4CVgfpq2DJoFt7wqGVRCVit4IFeJRYxoy3MngySk3LkmNbVOPryGoSfy3hyjoTKLR18CSt7uKAnMl2sZFbM0igLBKSkdkJFBgZISCnNAIvMuwEaV3kZQUA12LzANXllPKJGnqhxTeteLQxk69Uev39E5bkcoM4ikRmDGFckXv0/JYfil+yTnbE0QLR3BMuzeBtSZ75gqioE+ep4FAYsqhWm30sCbh6rPiifxsI9wtJGTFRbD0xdCZdJTHagdIa/Kerk/4bNjcAlXUKmGkrCiExRGiKQit7bCJhtPdIRRZFofwMgJBY0pkPUEk2tetxEg8+Zpu39yVyt2Q42sumbFCGEVnEHDDyHx3BZESwvvTjWnKVUdghOAGxbddIaRaJBtZZxC+4SC65ZSQamPmheuzQ3vJut1IU0ywtMm6614FCKkRwuBNNncQkdZkrtypIHSDXPIN+XFco1cR7csWmHYjqCj4Jde6wHPjCJLFjxEJGl0fGRsXRyHM6l+PHC/L9ep2V2QsftgYKJ0qH7jFRivuHC3hG04QwoBbTn5BLJA+7hSkvHdLFGlDXRJLWgd8HcVYMgrNsYV6xfCGuhee+2novm96oipEQJVI5t+5K5ESow4ZYexQhzBcKxhscwhBLYJpdZu9Ohfe7zlPEVLSZyNJg+4a+gcxh6eoM08QlbAN2vHkwKly9aoGPnV0+50CmRYkcGtL47YFEmgD0d0JzbsxE1UhwtscbvvuT6Oo9vXyFCclX9PQ/j4zGqqwI0VWNMFzY9kl8P1C95KInTQ7mZAaGOBRxH2bBnXFzsSCim5xNKrItghWyeEBiQCbrUNaylG4GZ9Ub7lDKEnfDZkpfpuIoHGXhmQzOx6K1ESCikJXRXJCmTt/MDdBxRFKuwlZyUUK3OjDEl3K7SVLn4wcJYuDCRnOYZeQ2XUzhFrUow780Avqxgb4SE7AWFf0foOejJvxcbLby6BWaBKM6EjtOCkgCc7+8FCMat9ovqEr5eEQCGMvpVS0akKWeTrlvSU/Fim67Q4gJOmVkaPs6TW+q/cT62ne48AjTlJ0oilZe9JILkXQE3rs5BfyeXRF8DAEx23MhYUoc6EbAzyQZD5LXvkSxicqXVdsCxIUrT55Wjo+z2O3kZlZtnJ0UpkxcGHk6QdvEJF/G9e4mjaCVOdm9LDIeAhCo2Cx5JOZ9OBaDOe+GX3fvfGGKXZS4UuWKzbvwSRuaIX4hsIEF2G0vQs/DIxW6leKBNMNv60IU6othp6N7QkJ1lpefkTpg5WjoXebQmHkKXnq9/lEK3xDk19ShjIqCZ2bZCnXlzx9cLiLj3L0Bl9dvzT0dNcrNqi7aaHFSPOd0bqEVvW6wyXNe8w2JmipzKR2zQV0LwqrjU8UKRSZ0DmgJ1ryAP2iEzjThhP06xJoZMobNZQOu20fAYMc/hyfxo8jozRCOyMIxPDyU4wYHvOAq1TzWFFMcOc0c+MiNHBiDMO+gkqAmOh8SGRSNK3YDha6k+5I0t5xEF+tEcHwu/aR8NRQG+/GlJmp7VpYZBwPD0pEqz4ZP/Qgsl8EWxbBDDu4MUMYFRFFNu9PkWCI7ZAwoocNbBB6k4wSnC4xhE8NMuJnsxGyYU+WRMdHLKhsBij6dQ2KafU4/9E/lZKduyqhj8e43sot+XV5FMEdi+D1W70TK+dFk6JfxuCL2l7yTVU+4STIdCOHkKt3/PkhkbEI3lBGRxic4ntzaJPY/6QQx0rN/XwJzfOac+OPEaMpTYrmaV30k1DCrqJsYfzd0MgU0/hDwyhSRKVhjyMsUnPpvNCKKKU8B28NOFHpzCJIFiYfesMo4kQN6ouYIiVUqtYIgTbpRZfOM+1I/pvmE1rLr8fjs4CTYU0VvVWCc3NfLYpfgiiihkd1NfStEpprNIGfY5WCFKnfw6XZbvm1QDOC77Os8TT+7UYQUyRNih+kgOuL4wSj/JJc67idMiNUIng29LWcjhiUn+gavrMiSN5iDVoYpHNG6//s2X9zBlIQGXeSCUpfHreVnOLxvk5QfqIMFa8ss317KuqgeJ4zxsW037xoX4rrpaBoYdbOSE6+obWlYHqI4NmwSxRvqQ96KH40osjmfwQ1Rh8IreE3bILYyfSS3pUExmcIHKH0I29laJGd5A7FRPhZME6R/S6Gh9EGnZfR3ij6vpJ94yOF74vyHFev6m2RokKqj8BW+7uVoenc+WBaBJENNzc20gEu1QOJwnv3tYbxUIL5zQXEud6o9fSOIhFCQG+3obSczqetEvw21T+l/YQ1JJXNfhCDur/r8lNoL5iQWt12pdNsbgOanU6lrbQkdNOJ8dStDz/xL0tD09MQUScGp4bepLOnUcNoEmUAhHFTjWFG95/Go/QpbUkMWSxOrQRHMPZuUBgfhPaNELITHCyVdnbNLo8y9M1g+gTn5i6KRqaS+cyP6IpzPZTEL/nMKIDTzlALgzempkL7XyaileP1+EmfToc9gsyd38q4Gw0PTcEhM9kr4DgtfsvnQ5d2hwE0MPhm9g0ox91laQocgd/ViB9beHOHATRwcVowBSAzBY6Qn1fZYQGShfR0bFo4Vp7mLFXNZM+R5kzg5cbwE3+cZocdgszlns7or2IZvM0VrSzKZj6c3U4gS8TZB3aUn2SheDmYDT+Er98KFkcyn/38Zad0I5IUUSrtvL/KD8PHpouFt3degC6Ob0YcM9n81Q8gec32QZVK4vL39Kj/gYDOnB/m+LOYY0cks+l3Z6JUosK2AnyCB9qy82k3a6s+ks2xs8xPOwaX6dxoXWw+yz74srwjlXA0xxOF2BE7y+8+O+hB+E6fDmbNbITBw9NRsqJQ5rPpq7/eA02pJFhpC350SNfwpnANSoR49unDFZsdeRf0/lzh48l9+6usvr4F1UsP15hGscxm2c9/vfuxfLazI4qiJBFA2JIiUdzZWf7x7sEpHAXsRu8ki7ncvQrfCCsXP9O5oj0UuFciosDh9Pzz1e733d0HCN93P5/iK5DPuI/P5c4v74G6BGFw8ZMs5DKkH9Cf3wT/GIAXrPeIfOF+0zOwcnJ5nisU3bEcAxZys5D+9nAw6+VHxODi8mM6l4tIk4XCy5y/ffr1vknLGAy+Prx8c5orFHLFTNpLC36ULhbz8P/Z859PTwazXu51sTI4eXj59pwsGMiZMF4VT79dPj35Opj1Im8Hg8HXk4uLi4cYFxfAazDrJcWIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxZoP/A9bvnVEn4nDqAAAAAElFTkSuQmCC" alt="" />
          </div>
          <div className="right">
            <h2 className="userName">Hi User,Welcome!</h2>
            <span className="p">To your primary dashboard! <br/>
            Click the buttton below to make a commitment
            </span> <br/>
            <button className="button">Make a pledge</button>
          </div>
         </div>
         <div className="cards">
          {/* <Card/> */}
          {/* <Card/> */}
          </div>
         </div>
         <div className="counties">
         <div className='title'>
        <h4 className='lead'>County by Rank</h4>
        <span style={{color:"green",marginTop:"15px" }}>View More</span>
        <div className="">
        <Company company={'Embu'} total={200000}/>
        <Company company={'Nairobi'} total={200000}/>
        <Company company={'Mombasa'} total={200000}/>
        <Company company={'Kisumu'} total={200000}/>
        <Company company={'Kajiado'} total={200000}/>
        <Company company={'Machacos'} total={200000}/>
        <Company company={'Makueni'} total={200000}/>
        <Company company={'Kericho'} total={200000}/>
        <Company company={'Trans-Nzoia'} total={200000}/>
        </div>
      </div>
         </div>
        </div>
        <div className="rightSide">
          <Leaderboard/>
        </div>

      </div>
    </div>
  )
};

export default Dashboard;