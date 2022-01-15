import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_URL ;
class CustomerService {
    getCustomer(data) {
        return axios.get(URL , 
            { 
                headers: {      
                    'APIKEY': API_KEY,
                    'Data-Operations': {
                        'filter': {
                            'filters': [
                                {
                                    'field': 'reference_name',
                                    'operator': 'contains',
                                    'ignoreCase': true,
                                    'value': data.filter
                                },
                                {
                                    'field': 'nit',
                                    'operator': 'contains',
                                    'ignoreCase': true,
                                    'value': data.filter
                                },
                                {
                                    'field': 'name',
                                    'operator': 'contains',
                                    'ignoreCase': true,
                                    'value': data.filter
                                }
                            ],
                            'logic': 'or'
                        },
                        'skip': data.page,
                        'take': data.count
                    }
                } 
            }
        );
    }
}

export default new CustomerService();