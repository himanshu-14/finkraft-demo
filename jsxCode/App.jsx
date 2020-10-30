const serverRootUrl="https://torch-special-discovery.glitch.me";
class App extends React.Component {
    state = {
        rows: []
    }
    callApiUpdateState = () => {
        console.log("callApiUpdateState function called");
        const axiosRes = axios.get(serverRootUrl+'/contacts').then(axiosRes => {
            console.log("api call is done!!")
            console.log(axiosRes.data);
            this.setState({ rows: axiosRes.data.contacts });
        })
        //url is with respect to server root url         
    }
    render() {
        console.log("App render function called");
        console.log(this.state.rows);
        return (
            <div className="container text-center">
                <h1>React Zoho Contacts API Demo</h1>
                <button className="btn btn-success" onClick={this.callApiUpdateState}>Refresh</button>
                {
                    (this.state.rows.length === 0) ? <h2>No results</h2> :
                        <table className="table">
                            <thead><td>Name</td><td>Company Name</td><td>Email</td><td>Workphone</td><td>OST Treatment</td><td>Receivables</td><td>Payables</td></thead>
                            {
                                this.state.rows.map(row => 
                                    <tr key={row.contact_id}>
                                        <td>{row.contact_name}</td>
                                        <td>{row.company_name}</td>
                                        <td>{row.email}</td>
                                        <td>{row.phone}</td>
                                        <td>{row.gst_treatment}</td>
                                        <td>{row.outstanding_receivable_amount}</td>
                                        <td>{row.outstanding_payable_amount}</td>
                                    </tr>
                                )
                            }
                        </table>
                }
            </div>
        );

    }


}
