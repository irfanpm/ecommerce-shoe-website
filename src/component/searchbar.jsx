
import { useContext, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Context } from '../context/context';


function searchbar() {
    const productData = useContext(Context)

    const { product } = productData
    const [state, setstate] = useState([])
    // const dis = prod.filter((a,) => {
    //     return a.type == b
    // })
    const click = (event) => {
        event.preventDefault()
        const b = event.target.sear.value

        var value = product.filter((a) => {
            return a.type == b
        })
        setstate(value)


    }


    return (
        <div>

            <div className='d-flex'>   <form action="" onSubmit={click}>
                <h1 style={{ textAlign: 'center' }}>Search</h1>

                <input type="text"
                    style={{
                        width: '500px',
                        height: '50px',
                        borderRadius: '20px'
                    }}
                    name="" id="sear" />
                <button
                    style={{
                        width: '70px',
                        height: '40px',
                        borderRadius: '20px'
                    }}
                >search</button>


            </form>
                &nbsp;

                <button
                    onClick={() => { setstate([]) }}
                    style={{
                        width: '70px',
                        height: '40px',
                        marginTop: '60px',
                        borderRadius: '20px',
                        color: '#fff',
                        background: 'red'

                    }}
                >clear</button>

            </div>
            <div className='d-flex col-md-6'>


                {
                    state.map((x) => {
                        return (
                            <>

                                <Card style={{ width: '28rem' }}>
                                    <Card.Img variant="top" src={x.Image} />
                                    <Card.Body>
                                        <Card.Title>{x.name}</Card.Title>
                                        <Card.Text>
                                            {x.price}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </>
                        )


                    })
                }
            </div>

        </div>
    )
}

export default searchbar
