const strings = (redis) => {
    redis.get('name', (err, res) => {
        console.log(res)
    })

    redis.set('count', 50, 'EX', 5)

    redis.mset('lang', 'go', 'for', 'backend', 'counter', 10)

    redis.mget('lang', 'for', (err, result) => console.log(result))

    redis.incrby('counter', 100)

    redis.get('counter', (err, res) => {
        console.log(res)
    })

    redis.get('count', (err, res) => {
        console.log(res)
    })
}

export default strings