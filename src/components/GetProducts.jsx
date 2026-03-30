import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const GetProducts = () => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");
    let [painkillers, setPainkillers] = useState([]);
    let [antibiotics, setAntibiotics] = useState([]);
    let [allergy, setAllergy] = useState([]);
    let [hygiene, setHygiene] = useState([]);
    let [eyecare, setEyecare] = useState([]);
    let [firstaid, setFirstaid] = useState([]);
    let [digestivehealth, setDigestivehealth] = useState([]);
    let [devices, setDevices] = useState([]);
    let [vitamins, setVitamins] = useState([]);
    let [cold, setCold] = useState([]);


    // base url for image location
    const img_url = "http://royford.alwaysdata.net/static/images/"

    let navigator = useNavigate()

    // function too fetch products from the server
    const getProducts = async () => {
        setError("");
        setLoading("Fetching products. Please wait ...");

        try {
            const response = await axios.get("https://royford.alwaysdata.net/api/get_products")
            console.log(response)
            if (response.status === 200) {
                setLoading("");
                setProducts(response.data);

                let painkiller_products = response.data.filter((product) => product.product_category === "painkillers")
                setPainkillers(painkiller_products);
                let antibiotic_products = response.data.filter((product) => product.product_category === "antibiotics")
                setAntibiotics(antibiotic_products);
                let allergy_products = response.data.filter((product) => product.product_category === "allergy")
                setAllergy(allergy_products);
                let hygiene_products = response.data.filter((product) => product.product_category === "hygiene")
                setHygiene(hygiene_products);
                let eyecare_products = response.data.filter((product) => product.product_category === "eyecare")
                setEyecare(eyecare_products);
                let firstaid_products = response.data.filter((product) => product.product_category === "firstaid")
                setFirstaid(firstaid_products);
                let digestivehealth_products = response.data.filter((product) => product.product_category === "digestivehealth")
                setDigestivehealth(digestivehealth_products);
                let devices_products = response.data.filter((product) => product.product_category === "devices")
                setDevices(devices_products);
                let vitamins_products = response.data.filter((product) => product.product_category === "vitamins")
                setVitamins(vitamins_products);
                let cold_products = response.data.filter((product) => product.product_category === "cold")
                setCold(cold_products);
                setSuccess("Products fetched successfully");
            }
        } catch (error) {
            setLoading("");
            setError(error.message);

        }
    };

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="row">
            <Navbar />
            <h3>Available Products</h3>
            <h5 className="text-warning">{loading}</h5>
            <h5 className="text-danger">{error}</h5>

            {/* map/loop over the product array to access one at a time */}

            {products.length ? (
                <>
                    <h2 className="text-center my-2 p-4 bg-dark text-white">Painkiller</h2>
                    {painkillers.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4">
                            <div className="card shadow card-margin">
                                <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description}</p>
                                    <b className="text-warning">{product.product_cost}</b>
                                    <br />
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => { navigator("/makepayment", { state: { product } }) }}
                                    >
                                        Purchase now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center my-2 p-4 bg-dark text-white">Antibiotics</h2>
                    {antibiotics.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4">
                            <div className="card shadow card-margin">
                                <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description}</p>
                                    <b className="text-warning">{product.product_cost}</b>
                                    <br />
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => { navigator("/makepayment", { state: { product } }) }}
                                    >
                                        Purchase now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center my-2 p-4 bg-dark text-white">Allergy</h2>
                    {allergy.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4">
                            <div className="card shadow card-margin">
                                <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description}</p>
                                    <b className="text-warning">{product.product_cost}</b>
                                    <br />
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => { navigator("/makepayment", { state: { product } }) }}
                                    >
                                        Purchase now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center my-2 p-4 bg-dark text-white">Hygiene</h2>
                    {hygiene.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4">
                            <div className="card shadow card-margin">
                                <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description}</p>
                                    <b className="text-warning">{product.product_cost}</b>
                                    <br />
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => { navigator("/makepayment", { state: { product } }) }}
                                    >
                                        Purchase now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center my-2 p-4 bg-dark text-white">Eyecare</h2>
                    {eyecare.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4">
                            <div className="card shadow card-margin">
                                <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description}</p>
                                    <b className="text-warning">{product.product_cost}</b>
                                    <br />
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => { navigator("/makepayment", { state: { product } }) }}
                                    >
                                        Purchase now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center my-2 p-4 bg-dark text-white">First Aid</h2>
                    {firstaid.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4">
                            <div className="card shadow card-margin">
                                <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description}</p>
                                    <b className="text-warning">{product.product_cost}</b>
                                    <br />
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => { navigator("/makepayment", { state: { product } }) }}
                                    >
                                        Purchase now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center my-2 p-4 bg-dark text-white">Digestive Health</h2>
                    {digestivehealth.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4">
                            <div className="card shadow card-margin">
                                <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description}</p>
                                    <b className="text-warning">{product.product_cost}</b>
                                    <br />
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => { navigator("/makepayment", { state: { product } }) }}
                                    >
                                        Purchase now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center my-2 p-4 bg-dark text-white">Devices</h2>
                    {devices.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4">
                            <div className="card shadow card-margin">
                                <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description}</p>
                                    <b className="text-warning">{product.product_cost}</b>
                                    <br />
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => { navigator("/makepayment", { state: { product } }) }}
                                    >
                                        Purchase now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center my-2 p-4 bg-dark text-white">Vitamins</h2>
                    {vitamins.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4">
                            <div className="card shadow card-margin">
                                <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description}</p>
                                    <b className="text-warning">{product.product_cost}</b>
                                    <br />
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => { navigator("/makepayment", { state: { product } }) }}
                                    >
                                        Purchase now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center my-2 p-4 bg-dark text-white">Cold</h2>
                    {cold.map((product) => (
                        <div className="col-md-3 justify-content-center mb-4">
                            <div className="card shadow card-margin">
                                <img src={img_url + product.product_image} alt="" className="product_img mt-4" />

                                <div className="card-body">
                                    <h5 className="mt-2">{product.product_name}</h5>
                                    <p className="text-muted">{product.product_description}</p>
                                    <b className="text-warning">{product.product_cost}</b>
                                    <br />
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => { navigator("/makepayment", { state: { product } }) }}
                                    >
                                        Purchase now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    
                </>
            ) : (
                <>
                    <h1>No products found</h1>
                </>

            )}
        </div>
    );
}

export default GetProducts;