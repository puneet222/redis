const lists = (redis) => {
    redis.del('planets')

    redis.rpush('planets', 'venus', 'earth', 'mars', 'jupiter')

    redis.lpush('planets', 'mercury')

    redis.rpush('planets', 'saturn')

    redis.rpop('planets')

    redis.lrange('planets', 0, -1, (err, res) => {
        console.log(res)
    })
}

export default lists