import Redis from 'ioredis'
import strings from './strings'

const redis = new Redis()

strings(redis)